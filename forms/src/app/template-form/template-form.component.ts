import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form): void {
    console.log(form.value)
    console.log(this.usuario)
  }

}
