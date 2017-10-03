import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'vp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title: string = 'Angular Application';
  fansQuantity: number = 2500;
  
  fansQuantityString() : string {
    return this.title + " has " + this.fansQuantity + " Fans";
  }
	// Agregar Funcion aca

}