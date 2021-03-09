import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome = 'abc';

  pessoa = {
    nome: 'jef',
    idade: 41
  }

  constructor() { }

  ngOnInit(): void {
  }

}
