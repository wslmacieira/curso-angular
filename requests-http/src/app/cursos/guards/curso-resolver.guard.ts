import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Injectable({ providedIn: 'root' })
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private service: CursosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso | any> {

    if (route.params && route.params.id) {
      return this.service.loadById(route.params.id);
    }

    return of({
      id: null,
      nome: null
    });
  }


}
