import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeadingComponent} from "./heading/heading.component";

@NgModule({
  declarations: [HeadingComponent],
  exports: [HeadingComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
