import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './shared/cart.service';
import { AuthService } from './user/auth.service';
import { IVeges } from './veges/veges';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InstaSMart';
  searchItem='';
  isLoggedIn:boolean=false;
 // public totalItem : number = 0;
cart:IVeges[]=[];
   
  /*  get isLoggedIn():boolean{
    return this.authservice.isLoggedIn();
  } 
   */
  get isLoggedInUser():boolean{
    return this.authservice.isLoggedIn;
  }

  get userName():string{
  
  if(this.authservice.currentUser)
  return this.authservice.currentUser?.userName;
  
  return '';
  
  }
  constructor(private router:Router,private authservice:AuthService,private cartService : CartService){}
  
 
  ngOnInit(): void {
   // this.cartService
 // const veg= this.cart=this.cartService.getVeges();
  // const veg=this.cartService.getVeges();
   //this.totalItem=veg.length;
  // console.log(this.totalItem);
   this.cartService.getVeges()
   .subscribe(res=>{
     //this.totalItem = res.length;
     this.cart=res;
   })

   
   console.log('menu on init');
   this.isLoggedIn=this.authservice.isLoggedIn;
    if(sessionStorage.getItem('isLogged')==='true'){
     this.isLoggedIn=true;
   } console.log(this.isLoggedIn, 'from init of menu ');
    }
  totalItem(){
    return this.cart.reduce((sum,item)=>sum+=item.qnty,0)
  }
  
    logOut():void{
      this.authservice.logOut();
      this.router.navigate(['home']);
    }

    ngOnDestroy(): void {
      console.log('menu destroyed');}
  
  
      ngOnChanges():void{
  
        console.log('menu component changes');
        if(sessionStorage.getItem('isLogged')=='true'){
          this.isLoggedIn=true;
        }
      }
  
}
