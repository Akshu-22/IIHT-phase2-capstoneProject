import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { GenericValidator } from '../shared/genericvalidator';
import { VegesService } from '../shared/veges.service';
import { getCurrentVegetable } from '../state/vegetable/vegetable.selectors';
import { State } from '../state/vegetable/vegetable.state';
import { Category, IVeges } from './veges';
import * as VegetableActions from '../state/vegetable/vegetable.actions';

@Component({
  selector: 'app-veges-add',
  templateUrl: './veges-add.component.html',
  styleUrls: ['./veges-add.component.css']
})
export class VegesAddComponent implements OnInit,OnDestroy  {

  pageTitle='Edit Vegetable';
  errorMessage='';
  vegetable!:IVeges | null | undefined;
  sub!:Subscription;
  addVegetable!: FormGroup;
  displayMessage: {[key:string]:string}={};
  vegetable$!: Observable<IVeges | null | undefined  >;

  private validationMessages!:{[key:string]:{[key:string]:string}};

  private genericValidator!:GenericValidator;
    
  constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private vegeservice:VegesService ) { 

  this.validationMessages={

    name:{
      required:'vegetable name is required ',
      minLength:'vegetable name must have 3 characters',
      maxLength:'vegetable name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    price:{
      required:'Price is required'
    },
    image:{
      required:'Image is required'
    },
    };
    this.genericValidator=new GenericValidator(this.validationMessages);

 }

ngOnDestroy(): void {
  //this.sub.unsubscribe();
}

  ngOnInit() {
    this.addVegetable = this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Category.vegetables,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
     
    });
    //
    console.log('created add form ')
        this.vegetable$ = this.store.select(getCurrentVegetable)
          .pipe(
            tap(currentVegetable => this.displayVegetable(currentVegetable)) );

    this.vegetable$.subscribe(resp=>this.vegetable=resp);
    console.log('selected current vegetable in ng onit add product ',this.vegetable);

      this.addVegetable.valueChanges.subscribe(() => this.displayMessage =this.genericValidator.processMessages(this.addVegetable) );
    console.log('value in form changes')
   //
    this.addVegetable.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addVegetable))

  }
  get id(){
    return this.addVegetable.get("id");
  }

  get name(){
    return this.addVegetable.get("name");
    }
    get category(){
      return this.addVegetable.get("category");
        }

  get image(){
    return this.addVegetable.get("image");
    }
  get price(){
    return this.addVegetable.get("price");
      }

    displayVegetable(vegetableParam:IVeges |null |undefined):void{

    this.vegetable = vegetableParam;
    if(this.vegetable){
 
     this.addVegetable.reset();
 
     if(this.vegetable.id==0){
       this.pageTitle='Add Vegetable';
     }
     else{
 
       this.pageTitle=`Edit Vegetable: ${this.vegetable.name}`;
 
     }
  
  this.addVegetable.patchValue({
   id:this.vegetable.id,
    name:this.vegetable.name,
    category:this.vegetable.category,
    image:this.vegetable.image, 
    price:this.vegetable.price,
   
  }) 
    }
 
   }
 
   saveVegetable(originalProduct:IVeges |null |undefined):void{
 
     if(this.addVegetable.valid){
       if(this.addVegetable.dirty){
         const vegetable={...originalProduct,...this.addVegetable.value};
 
       if(vegetable.id==0){
        this.store.dispatch(VegetableActions.createVegetable({vegetable}));
  
      }
      else{
        this.store.dispatch(VegetableActions.updateVegetable({ vegetable}));
      }
       }      
     }
     this.router.navigate(['veges']);
   }
 
   blur():void{
   this.displayMessage=this.genericValidator.processMessages(this.addVegetable);
 
   }
}
