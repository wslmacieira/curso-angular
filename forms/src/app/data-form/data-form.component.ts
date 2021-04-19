import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.fb.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    });

  }

  onSubmit(): void {
    console.log(this.formulario);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        // reseta o form
        this.resetar();
      },
        (error: any) => alert('erro'));
  }

  resetar(): void {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailValido(): boolean {
    return this.formulario.get('email').errors.email;
  }

  consultaCEP(): void {

    let cep = this.formulario.get('endereco.cep').value;
    // Nova variável "cep" somente com dígitos.

    // Verifica se campo cep possui valor informado.
    if (cep !== '' && cep !== null) {
      cep = cep.replace(/\D/g, '');

      // Expressão regular para validar o CEP.
      const validaCep = /^[0-9]{8}/;

      // Valida o formato do CEP.
      if (validaCep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          data => this.populaDadosForm(data)

        );
      }
    }
  }

  populaDadosForm(dados): void {

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(): void {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }

}
