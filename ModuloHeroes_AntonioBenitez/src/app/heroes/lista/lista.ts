import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone : false
})
export class ListaComponent {
  public nombreHeroes : string[] = ["Goku","Vegeta","Piccolo","Satan","Bulma","Gohan"];
  public heroeEliminado? : string;

  public borrarHeroe(){
    this.heroeEliminado = this.nombreHeroes.pop();
  }
}
