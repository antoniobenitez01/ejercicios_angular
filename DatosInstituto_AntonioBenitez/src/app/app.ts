import { Component, signal } from '@angular/core';
import { Lista } from "./lista/lista";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Lista]
})
export class App {
  protected readonly title = signal('DatosInstituto_AntonioBenitez');
}
