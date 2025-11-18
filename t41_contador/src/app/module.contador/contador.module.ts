import { NgModule } from "@angular/core";
import { ContadorComponent } from "./components/comp.contador/contador.component";

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]
})
export class ContadorModule{

}
