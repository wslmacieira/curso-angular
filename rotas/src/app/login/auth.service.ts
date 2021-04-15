import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmiter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario): void {
    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmiter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmiter.emit(false);
    }
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

}
