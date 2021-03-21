import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class CursosService {
  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  private cursos = ['Angular', 'React', 'Node.js'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
