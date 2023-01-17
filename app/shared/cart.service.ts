/*  import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, catchError, Observable,tap } from "rxjs";
import { IVeges } from "../veges/veges";

@Injectable({
    providedIn: 'root'
  
  }) 
  export class CartService implements OnInit{
   
    url="api/cart";
     cartItemList:IVeges[]=[];
    
     private vegeList=new BehaviorSubject<IVeges |null>(null); 
    constructor(private http:HttpClient){}
  
  ngOnInit(): void {
   
  }  
      getVegetable(){
  
      return this.vegeList.asObservable();  
    }  
      getVegetable():Observable<IVeges[]>{  
        return this.http.get<IVeges[]>(this.url).pipe(
            tap(data=>{console.log(data);        
              this.cartItemList=data;
        }),
           // catchError(this.errorHandler)
        );
      } 
    
  
    setVeges(vege:IVeges):void{
  
      this.cartItemList.push(...vege);
  
      this.vegeList.next(vege);
  
    } 
    createCart(cart:IVeges):Observable<IVeges>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        const newCart={...cart};

        return this.http.post<IVeges>(this.url,newCart,{headers}).pipe(
            tap(data=>{
                this.cartItemList.push(data);
                console.log(this.cartItemList);
            },
           // catchError(this.errorHandler)
            )
        )
    }
    addtoCart(vege:IVeges):void{
  
      this.cartItemList.push(vege);
  
      this.vegeList.next(vege);
  
      this.getTotalPrice();
  
      console.log(this.cartItemList);
  
    }
    
    getTotalPrice():number{
  
      let grandTotal=0;
  
      this.cartItemList.map((a:any)=>{
  
        grandTotal+=a.total;
  
      })
  
      return grandTotal;
  
    }
  
    removeCartItem(vege:IVeges){
  
      this.cartItemList.map((a:any, index:any)=>{
  
        if(vege.id===a.id){
  
          this.cartItemList.splice(index, 1);
  
        }
  
      })
  
    }
  
  
    removeAllCart(){
  
      this.cartItemList=[]
  
     // this.vegeList.next(vege);
  
    }
  
  }  */

  import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IVeges } from "../veges/veges";

@Injectable({
    providedIn: 'root'

})

export class CartService{

    cart: IVeges[]=[];
    private vegeList=new BehaviorSubject<IVeges[]>([]); 

    constructor(private http:HttpClient){}
    url="api/cart";
  
    getVeges(){
      
        return this.vegeList.asObservable(); 
        
    }  
    setVeges(veges:IVeges[]){
      this.cart.push(...veges);
      this.vegeList.next(veges);
    }  
    addtoCart(vege:IVeges){
      this.vegeList.next(this.cart);
      const exist=this.cart.find(({name})=>name===vege.name);
      if(!exist){
        this.cart.push({...vege,qnty:1})
        return 
      }
      exist.qnty +=1;

       // this.cart.push(vege);
        //this.vegeList.next(this.cart);
    }
    deleteCart(vege:IVeges){
        const id=vege.id;
        const comIndex=this.cart.findIndex(item=>item.id===id);
        if(comIndex >-1){
            this.cart.splice(comIndex,1);
        }
        this.vegeList.next(this.cart);
    }
    getTotalPrice():number{ 
      let grandTotal=0;
      this.cart.map((c:IVeges)=>{  
      grandTotal+=c.total; 
      })  
      return grandTotal;  
    }

    emptyCart(){
      this.cart=[]; 
     this.vegeList.next(this.cart);

    }
}