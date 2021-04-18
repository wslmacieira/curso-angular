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
    nome: 'wagner',
    email: 'wagner@email.com'
  }

  onSubmit(form): void {
    console.log(form.value)
    console.log(this.usuario)
  }

}
