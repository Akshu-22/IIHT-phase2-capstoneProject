import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegesListComponent } from './veges-list.component';
import { VegesDetailsComponent } from './veges-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegesRoutingModule } from './veges.routing.module';
import { VegesAddComponent } from './veges-add.component';
import { VegetableEffects } from '../state/vegetable/vegetable.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { vegetableReducer } from '../state/vegetable/vegetable.reducer';
import { CartComponent } from '../shopping-cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    VegesListComponent,
    VegesDetailsComponent,VegesAddComponent,//CartComponent
  ],
  imports: [
    CommonModule,FormsModule, Ng2SearchPipeModule,
    ReactiveFormsModule,
    VegesRoutingModule,MaterialModule,
    StoreModule.forFeature('vegetables', vegetableReducer),
    EffectsModule.forFeature([VegetableEffects])
  ]
})
export class VegesModule { }
