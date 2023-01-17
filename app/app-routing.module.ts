import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './About-Us/about-page.component';
import { CartComponent } from './shopping-cart/cart.component';
import { ContactPageComponent } from './Contact-Us/contact-page.component';
import { ElectronicListComponent } from './Electronic/electronic-list.component';
import { FashionListComponent } from './Fashion/fashion-list.component';
import { HomePageComponent } from './Home/home-page.component';
import { LoginComponent } from './user/login.component';
import { VegesListComponent } from './veges/veges-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'',pathMatch:'full' ,component:HomePageComponent},
  {path:'fashion',component:FashionListComponent},
  {path:'electronic',component: ElectronicListComponent},
  {path:'home',component: HomePageComponent},
  {path:'about',component: AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {
    path:'login',component:LoginComponent
  },

  {path:'shopCart',
  loadChildren:()=>import('./shopping-cart/shopping-cart.module').then((v)=>v.ShoppingCartModule)},
  
  {path:'veges',
  component: VegesListComponent,
  loadChildren:()=>import('./veges/veges.module').then((v)=>v.VegesModule),},

  {path:'**',component:PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
