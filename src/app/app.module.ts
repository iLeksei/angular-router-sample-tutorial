import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import {HeroesRoutingModule} from "./heroes/heroes-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {CrisisCenterRoutingModule} from "./crisis-center/crisis-center-routing.module";
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesRoutingModule,
    HeroesModule,
    FormsModule,
    BrowserAnimationsModule,
    CrisisCenterModule,
    CrisisCenterRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
