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
    console.log(form);
    // console.log(this.usuario)
  }

  verificaValiTouched(campo): boolean {
    return !campo.valid && campo.touched;
  }

  consultaCEP(cep): void {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {

      // Expressão regular para validar o CEP.
      const validaCep = /^[0-9]{8}/;

      // Valida o formato do CEP.
      if (validaCep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(
          data => console.log(data)
        );
      }
    }
  }

}
