import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
//import { ProductDetailComponent } from './product-detail.component';
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
//import { ProductGuardService } from './product-guard.service';
import { PersonsService } from './person.service';
//import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'persons', component: PersonListComponent }
        //,{ path: 'products/:id',
          //canActivate: [ ProductGuardService ],
          //component: ProductDetailComponent }
    ]),
    //SharedModule
  ],
  declarations: [
    PersonListComponent,
    //ProductDetailComponent,
    //ConvertToSpacesPipe
  ],
  providers: [
    PersonsService
    //ProductGuardService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
