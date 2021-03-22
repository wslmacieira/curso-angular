import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
  ];

constructor() { }

getAlunos(): any {
  return this.alunos;
}

getAluno(id: number): any {
  for (const aluno of this.alunos) {
    if (aluno.id == id) {
      return aluno;
    }
  }
  return null;
}

}
