import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string): Observable<any> {

    // Verifica se campo cep possui valor informado.
    if (cep !== '' && cep !== null) {
      // Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');

      // Expressão regular para validar o CEP.
      const validaCep = /^[0-9]{8}/;

      // Valida o formato do CEP.
      if (validaCep.test(cep)) {

        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }

}
