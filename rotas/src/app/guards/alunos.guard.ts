import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
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
