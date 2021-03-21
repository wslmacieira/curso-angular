import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';
@Injectable()
export class CursosService {
  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  private cursos = ['Angular', 'React', 'Node.js'];

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  getCursos(): string[] {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
