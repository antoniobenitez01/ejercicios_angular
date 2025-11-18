import { Component, signal } from '@angular/core';
import { HeroesModulo } from './heroes/heroes.module';

@Component({
  imports:[HeroesModulo],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ModuloHeroes_AntonioBenitez');
}
