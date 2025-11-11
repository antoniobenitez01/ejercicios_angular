import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  imports: [],
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

  public cambiarNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public cambiarEdad(edad: number): void {
    this.edad = edad;
  }
}
