import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../shared/shared.module";

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
