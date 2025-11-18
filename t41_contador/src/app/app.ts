import { Component, signal } from '@angular/core';
import { ContadorModule } from './module.contador/contador.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ ContadorModule ]
})
export class App {
  public title: string  = "CONTADOR";
  public contador: number = 0;
  public cantidad: number = 1;

  incrementar(): void {
    this.contador += this.cantidad;
  }

  decrementar(): void {
    if(this.contador > 0){
      this.contador -= this.cantidad;
    }
  }

  resetear(): void {
    this.contador = 0;
  }
}
