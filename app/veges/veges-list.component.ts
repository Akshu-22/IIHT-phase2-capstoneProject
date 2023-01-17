import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VegesService } from '../shared/veges.service';
import { IVeges } from './veges';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { Store } from '@ngrx/store';
import { State } from '../state/vegetable/vegetable.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getCurrentVegetable, getError, getVegetable } from '../state/vegetable/vegetable.selectors';

@Component({
  selector: 'app-veges-list',
  templateUrl: './veges-list.component.html',
  styleUrls: ['./veges-list.component.css']
})
export class VegesListComponent implements OnInit {

 /*  constructor(private vegesService:VegesService){};
  vegetable!:IVeges[];
  ngOnInit(): void {
    this.vegesService.getVegetable().subscribe((fash:IVeges[])=>{
      this.vegetable=fash;   

});
     */

filteredVegetable:IVeges[]=[];
  vege!:IVeges;
  selectedVegetable!:IVeges | null;
  filterValue!:string;
  vegetables:IVeges[]=[];
  href:string='';

  constructor(private vegeService:VegesService,private store:Store<State>,  private router:Router){};
  
  // Observables---
vegetable$!:Observable<IVeges[]>;
selectedVegetable$!:Observable<any>;
errorMessage$!: Observable<string>;
//
dataReceived=this.vegeService.getVegetable();
obsFood$!:Observable<IVeges[]>;
//

 

  ngOnInit(): void {
   
    this.href=this.router.url;
    this.vegetable$ = this.store.select(getVegetable);
    this.vegetable$.subscribe(resp=>this.filteredVegetable=resp);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(VegetableActions.loadVegetable());
    this.selectedVegetable$ = this.store.select(getCurrentVegetable);

  }
  
  
  }


