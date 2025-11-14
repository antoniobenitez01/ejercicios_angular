import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroe',
  imports: [CommonModule],
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
})
export class HeroeComponent {
  public nombre: string = "Son Goku";
  public edad: number = 45;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public getDescriptionHeroe(): string {
    return `${this.nombre} : ${this.edad}`
  }

  public cambiarNombre(): void {
    this.nombre = "Vegeta";
  }

  public reestablecer(): void {
    this.nombre = "Goku";
  }

  public cambiarEdad(): void {
    this.edad++;
  }
}
