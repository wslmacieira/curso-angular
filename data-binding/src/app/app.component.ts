import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor =  5;

  deletarCiclo = false;

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo(): void {
    this.deletarCiclo = true;
  }
}
