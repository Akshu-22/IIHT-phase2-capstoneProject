import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IVeges } from './veges';
import * as VegetableActions from '../state/vegetable/vegetable.actions';
import { VegesService } from '../shared/veges.service';
import {  Store } from '@ngrx/store';
import { State } from '../state/vegetable/vegetable.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getCurrentVegetable, getError, getVegetable } from '../state/vegetable/vegetable.selectors';
import { CartService } from '../shared/cart.service';
import { AuthGuard } from '../user/auth.guard.service';

@Component({
  selector: 'app-veges-details',
  templateUrl: './veges-details.component.html',
  styleUrls: ['./veges-details.component.css']
})
export class VegesDetailsComponent implements OnInit {
  
  @Input() vegetable:IVeges[]=[];

  filteredVegetable:IVeges[]=[];
  vege!:IVeges;
  selectedVegetable!:IVeges | null;
  filterValue:any;
  vegetables:IVeges[]=[];
  href:string='';
  public show:boolean = false;

  constructor(private vegeService:VegesService,private store:Store<State>,  private router:Router,private cartService : CartService){};

  @Output() OnVegetableSelection:EventEmitter<IVeges>=new EventEmitter<IVeges>();

  // Observables---
vegetable$!:Observable<IVeges[]>;
selectedVegetable$!:Observable<any>;
errorMessage$!: Observable<string>;
//
dataReceived=this.vegeService.getVegetable();
obsFood$!:Observable<IVeges[]>;
//
toggle() {
  this.show = !this.show;
}
 
  ngOnInit(): void {
    this.href=this.router.url;
    this.vegetable$ = this.store.select(getVegetable);
    this.vegetable$.subscribe(resp=>this.filteredVegetable=resp);
    this.errorMessage$ = this.store.select(getError);
    this.store.dispatch(VegetableActions.loadVegetable());
    this.selectedVegetable$ = this.store.select(getCurrentVegetable);
    
  }
  onSelect(p:IVeges){
    this.OnVegetableSelection.emit(p);
   }

  filterData(val:string):void{
    console.log(this.vegetables);
    this.filteredVegetable=this.vegetables.filter((p)=>p.category===val);
  }
  newVegetable():void{
    console.log('in new food');  
    this.store.dispatch(VegetableActions.initializeCurrentVegetable());
    this.router.navigate([this.href,'addVeges']);
  }

  vegetableSelected(f1:IVeges){
   
    this.store.dispatch(VegetableActions.setCurrentVegetable({currentVegetableId:f1.id}));
   }
   
   getVegetableById(id:number):IVeges{
    this.vegeService.getVegetableById(id).subscribe(resp=>this.vege=resp);
    return this.vege;
  }

  deleteVegetable(vege:IVeges):void{
    if(vege && vege.id){
      if(confirm(`Are you sure you want to delete ${vege.name} details`)){

        this.store.dispatch(VegetableActions.deleteVegetable({ vegetableId: vege.id }));      
      }
      else{
        this.store.dispatch(VegetableActions.clearCurrentVegetable());       
      }   
    }
    this.router.navigate(['veges'])
  }
  addtocart(item: IVeges){
    this.cartService.addtoCart(item);
    this.router.navigate(['shopCart']);
  }
}
