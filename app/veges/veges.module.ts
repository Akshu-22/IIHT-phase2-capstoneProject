import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegesListComponent } from './veges-list.component';
import { VegesDetailsComponent } from './veges-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegesRoutingModule } from './veges.routing.module';



@NgModule({
  declarations: [
    VegesListComponent,
    VegesDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,VegesRoutingModule,MaterialModule
  ]
})
export class VegesModule { }
