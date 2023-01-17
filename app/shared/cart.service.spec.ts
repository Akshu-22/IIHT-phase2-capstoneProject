import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from "rxjs";
import { Category, IVeges } from '../veges/veges';
import { CartService } from './cart.service';


describe('Cart Service', () => {
  let service: CartService;
  let injector: TestBed;

  let httpMock: HttpTestingController;

let  vege:IVeges[]=[];


  beforeEach(async () => {
     TestBed.configureTestingModule({
        imports:[HttpClientTestingModule, ReactiveFormsModule,
            FormsModule],
      providers: [ CartService ]
    });
   service=TestBed.get(CartService)
   injector = getTestBed();
   vege=[
    {
        id:101,
        name:"tomato",
        category:Category.vegetables,  
        price:180,
        image:"../../assets/images/tomato.jpg",
        qnty:1,
        company:"Nagpur Suppliers",
        total:0, 
       },
      { 
       id:102,
        name:"apple",
        category:Category.vegetables, 
        price:340,
        image:"../../assets/images/apple.jpg",
        qnty:1,
        company:"Nagpur Suppliers",
        total:0,
       
    }];
    service.cart=vege;

    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

/* --- test case to check addCart() --- */

  it('should addtoCart()', () => {
   
    
    let vegetable1 ={
        id:113,
        name:"banana",
        category:Category.vegetables,
        price:300,
        image:"../../assets/images/banana.jpg",
        qnty:1,
        company:"Nagpur Suppliers",
        total:0,
       };
  
      vege=[...vege,vegetable1]; 
      service.cart.push(vegetable1); 
      service.addtoCart(vegetable1);
      expect(service.cart.length).toEqual(3);


  });

  /* --- test case to check deleteCart() --- */

  it('should check the deleteCart() method',()=>{

    let vegetable1 ={
      id:113,
      name:"banana",
      category:Category.vegetables,
      price:300,
      image:"../../assets/images/banana.jpg",
      qnty:1,
      company:"Nagpur Suppliers",
      total:0,
     };

    vege=[...vege,vegetable1]; 
    service.cart.push(vegetable1); 
    service.deleteCart(vegetable1);  
    expect (service.cart.length).toEqual(2);
  
  });

 


  });