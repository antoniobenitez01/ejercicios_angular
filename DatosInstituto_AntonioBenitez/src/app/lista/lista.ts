import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  public centro: string = "IES Playamar";
  public localidad: string = "Torremolinos";
  public familias: string[] = ["Tecnología","Mecánica","Informática"];
  public logo: string = "playamar.png"

  public get centroCapitalizado(): string{
    return this.centro.toUpperCase();
  }

  public cambiarInstituto(): void{
    if(this.centro == "IES Playamar"){
      this.centro = "IES Jacaranda";
      this.localidad = "Churriana";
      this.familias = ["Hostelería","Turismo"];
      this.logo = "jacaranda.jpeg";
    }else{
      this.centro = "IES Playamar";
      this.localidad = "Torremolinos";
      this.familias = ["Tecnología","Mecánica","Informática"];
      this.logo = "playamar.png";
    }
  }
}
