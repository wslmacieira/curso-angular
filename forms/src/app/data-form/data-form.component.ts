import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EstadoBr } from '../shared/models/estadobr';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  // estados: EstadoBr[];
  estados: Observable<EstadoBr[]>;
  cargos: any[];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {

    this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();

    // this.dropdownService.getEstadosBr()
    //   .subscribe(dados => this.estados = dados);

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
      }),
      cargo: [null]
    });

  }

  onSubmit(): void {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(dados => {
          console.log(dados);
          // reseta o form
          this.resetar();
        },
          (error: any) => alert('erro')
        );
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(
      campo => {
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      }
    );
  }

  resetar(): void {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {

    return !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  verificaEmailValido(): boolean {
    return this.formulario.get('email').errors.email;
  }

  consultaCEP(): void {

    const cep = this.formulario.get('endereco.cep').value;

    if (cep !== '' && cep != null) {

      this.cepService.consultaCEP(cep).subscribe(
        data => this.populaDadosForm(data)
      );
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

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

}
