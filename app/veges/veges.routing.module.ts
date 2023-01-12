import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VegesListComponent } from "./veges-list.component";



const routes: Routes = [
    {
      path: '', component: VegesListComponent 
    }
  ];
  
  @NgModule({
    imports: [
  
      RouterModule.forChild(routes),],
    exports:[RouterModule]})
  export class VegesRoutingModule{
  
  }