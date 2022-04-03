import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../../shared/shared.module";

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';



@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
