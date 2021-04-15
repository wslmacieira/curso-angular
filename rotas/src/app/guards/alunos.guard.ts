import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {

    //console.log(route);
    //console.log(state);

    if (state.url.includes('editar')) {
      // alert('Usuário sem acesso');
      // return Observable.of(false);
    }

    return true;
  }
}
