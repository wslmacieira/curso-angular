import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log(form);
    // console.log(this.usuario)
  }

  verificaValiTouched(campo) {
    return !campo.valid && campo.touched;
  }

}
