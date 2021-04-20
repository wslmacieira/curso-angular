import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[] = [];

  cursos$: Observable<Curso[]>;

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    // this.cursoService.listar()
    //   .subscribe(data => this.cursos = data);
    this.cursos$ = this.cursoService.listar();
  }

}