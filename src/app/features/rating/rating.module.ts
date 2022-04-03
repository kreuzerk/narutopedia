import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';


@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RatingRoutingModule
  ]
})
export class RatingModule { }
