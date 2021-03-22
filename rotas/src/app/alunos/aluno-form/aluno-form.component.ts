import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: any = {};
  inscricao: Subscription;
  id: number;
  formMudou = false;


  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => this.id = params.id
    );
    this.aluno = this.alunosService.getAluno(this.id);

    if (this.aluno === null) {
      this.aluno = {};
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
