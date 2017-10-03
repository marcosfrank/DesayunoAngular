import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './app.component';
import { PersonModule } from './people/person.module';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [RootComponent]
})
export class AppModule { }
