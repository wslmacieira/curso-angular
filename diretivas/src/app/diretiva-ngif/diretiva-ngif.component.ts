import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos = [];

  mostrarCursos = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
