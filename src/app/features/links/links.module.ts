import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';


@NgModule({
  declarations: [
    LinksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LinksRoutingModule
  ]
})
export class LinksModule { }
