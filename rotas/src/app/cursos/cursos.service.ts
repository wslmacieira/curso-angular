import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): any {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'React'},
    ];
  }

  getCurso(id: number): any {
    const cursos = this.getCursos();

    for (const curso of cursos) {
      if (curso.id == id) {
        console.log(curso);
        return curso;
      }
    }
    return null;
  }

}
