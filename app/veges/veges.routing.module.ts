import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../user/auth.guard.service";
import { CartComponent } from "../shopping-cart/cart.component";
import { VegesAddComponent } from "./veges-add.component";
import { VegesListComponent } from "./veges-list.component";



const routes: Routes = [
    {
      canActivate:[AuthGuard],
      path:'addVeges',component:VegesAddComponent
      
    },
     /*  {
        //canActivate:[AuthGuard],
        path:'cart',component:CartComponent
      }  */
     
  ];
  
  @NgModule({
    imports: [
  
    RouterModule.forChild(routes),],
    exports:[RouterModule]})
  export class VegesRoutingModule{
  
  }