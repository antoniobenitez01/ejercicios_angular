import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<div>
    <h3>{{ contador }}</h3>
  </div>
  <div>
    <button (click)="incrementar()">+{{ cantidad }}</button>
    <button (click)="resetear()">RESET</button>
    <button (click)="decrementar()">-{{ cantidad }}</button>
  </div>`,
  standalone: false
})

export class ContadorComponent {
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
