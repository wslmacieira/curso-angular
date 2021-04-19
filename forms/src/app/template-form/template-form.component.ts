import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
    cep: null
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    // console.log(form);
    // console.log(this.usuario)
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
  }

  verificaValiTouched(campo): boolean {
    return !campo.valid && campo.touched;
  }

  consultaCEP(cep, form): void {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {

      // Expressão regular para validar o CEP.
      const validaCep = /^[0-9]{8}/;

      // Valida o formato do CEP.
      if (validaCep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          data => this.populaDadosForm(data, form)

        );
      }
    }
  }

  populaDadosForm(dados, formulario): void {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario): void {
    formulario.form.patchValue({
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
