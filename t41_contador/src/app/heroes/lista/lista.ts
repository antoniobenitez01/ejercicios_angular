import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [NgIf],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone : true
})
export class ListaComponent {
  public nombreHeroes : string[] = ["Goku","Vegeta","Piccolo","Satan","Bulma","Gohan"];
  public heroeEliminado? : string;

  public borrarHeroe(){
    this.heroeEliminado = this.nombreHeroes.pop();
  }
}
