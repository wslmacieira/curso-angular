import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  private emissor$ = new Subject();

  emitirValor(valor: string): void {
    this.emissor$.next(valor);
  }

  getValor(): Observable<any> {
    return this.emissor$.asObservable();
  }

}
