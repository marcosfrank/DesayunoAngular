import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'vp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title: string = 'Marcos';
}