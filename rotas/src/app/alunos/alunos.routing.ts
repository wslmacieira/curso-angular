import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoDetalheResolver } from './aluno-detalhe/guards/aluno-detalhe.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

const routes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      {
        path: ':id', component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver }
      },
      {
        path: ':id/editar', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
