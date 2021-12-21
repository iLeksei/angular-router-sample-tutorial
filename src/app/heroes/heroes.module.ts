import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroListComponent} from "./hero-list/hero-list.component";


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
  ],
  exports: [
    HeroDetailComponent,
    HeroListComponent,
  ]
})
export class HeroesModule { }
