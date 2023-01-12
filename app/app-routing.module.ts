import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './About-Us/about-page.component';
import { ContactPageComponent } from './Contact-Us/contact-page.component';
import { ElectronicListComponent } from './Electronic/electronic-list.component';
import { FashionListComponent } from './Fashion/fashion-list.component';
import { FurnitureListComponent } from './Furniture/furniture-list.component';
import { HomePageComponent } from './Home/home-page.component';
import { HomekitchenListComponent } from './HomeKitchen/homekitchen-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full' ,component:HomePageComponent},
  {path:'fashion',component:FashionListComponent},
  {path:'kitchen',component:HomekitchenListComponent},
  {path:'furniture',component:FurnitureListComponent},
  {path:'electronic',component: ElectronicListComponent},
  {path:'home',component: HomePageComponent},
  {path:'about',component: AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'veges',
  loadChildren:()=>import('./veges/veges.module').then((v)=>v.VegesModule),}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
