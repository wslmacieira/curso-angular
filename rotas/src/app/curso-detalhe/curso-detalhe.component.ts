import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) {
   // this.id = this.route.snapshot.params['id'];
   // console.log(this.route);
  }

  id: string;
  inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => this.id = params.id
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
