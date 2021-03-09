import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://wslmacieira.com';
  cursoAngular = true;
  urlImagem = 'https://loremflickr.com/400/200'

  getValor() {
    return 1;
  }

  getCurtitCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
