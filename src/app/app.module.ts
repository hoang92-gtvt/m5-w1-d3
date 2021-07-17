import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import {OverviewComponent} from "./overview/overview.component";

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    RoutingComponent,
    HomeComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
