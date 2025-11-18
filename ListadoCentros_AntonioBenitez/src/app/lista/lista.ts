import { Component } from '@angular/core';

export interface Centro{
  nombre : string;
  localidad : string;
  ciclos : string[];
  logo : string;
}

const centro1 : Centro = {nombre: "I.E.S. Playamar", localidad: "Torremolinos", ciclos: ["DAM","DAW"], logo: "playamar.png"}
const centro2 : Centro = {nombre: "I.E.S. Arroyo de la Miel", localidad: "Benalmádena", ciclos: ["Tecnología","Ciencias"], logo: "arroyo.jpg"}
const centro3 : Centro = {nombre: "I.E.S. Belén", localidad: "Málaga", ciclos: ["Informática","Mecánica"], logo: "belen.png"}
const centro4 : Centro = {nombre: "I.E.S. Pablo Picasso", localidad: "Málaga", ciclos: ["Arte","Literatura"], logo: "pablo.jpg"}
const centro5 : Centro = {nombre: "I.E.S. Cerro del Viento", localidad: "Benalmádena", ciclos: ["Filosofía","Contabilidad"], logo: "cerro.png"}

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  public listaCentros : Centro[] = [centro1,centro2,centro3,centro4,centro5];
  public pilaCentros : Centro[] = [];
  public posicion : number = 0;

  public getListaSize() : number{
    return this.listaCentros.length;
  }

  public getPilaSize() : number{
    return this.pilaCentros.length;
  }

  public anterior():void{
    if(this.posicion > 0){
      this.posicion--;
    }
  }

  public posterior():void{
    if(this.posicion < this.getListaSize()-1){
      this.posicion++;
    }
  }

  public eliminarCentro():void{
    if(this.getListaSize() > 0){
      this.pilaCentros.push(this.listaCentros[this.posicion])
      this.listaCentros.splice(this.posicion,1);
      this.posicion = 0;
    }
  }

  public sacarPila():void{
    if(this.getPilaSize() > 0){
      this.listaCentros.splice(this.posicion,0,this.pilaCentros.pop()!);
      this.posicion = 0;
    }
  }
}
