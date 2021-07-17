import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RoutingComponent} from "./routing/routing.component";
import {OverviewComponent} from "./overview/overview.component";
import {MyformComponent} from "./myform/myform.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'rout', component:RoutingComponent},
  {path:'overview', component:OverviewComponent},
  {path:'form', component:MyformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
