import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { empty, Observable, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();
  cursoSelecionado: Curso;

  // bsModalRef: BsModalRef;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: CursosService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh(): any {
    this.cursos$ = this.service.list()
      .pipe(
        // map(),
        // tap(),
        // switchMap(),
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          return empty();
        })
      );

    // this.service.list()
    //   .pipe(
    //     catchError(error => empty())
    //   )
    //   .subscribe(
    //     dados => console.log(dados),
    //     // error => console.error(error),
    //     // () => console.log('Observable completo!')
    //   );
  }

  handleError(): void {
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. tente novamente mais tarde.';
    this.alertService.showAlertDanger('Erro ao carregar cursos. tente novamente mais tarde.');
  }

  onEdit(id: number): void {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso): void {
    this.cursoSelecionado = curso;
    console.log(curso);
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete(): void {
    this.service.remove(this.cursoSelecionado.id)
      .subscribe(
        (success: any) => this.onRefresh(),
        (error: any) => this.alertService.showAlertDanger('erro ao remover curso.')
      );
    this.deleteModalRef.hide();
  }

  onDeclineDelete(): void {
    this.deleteModalRef.hide();
  }

}
