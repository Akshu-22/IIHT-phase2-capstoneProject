import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from "rxjs";
import { Category, IVeges } from '../veges/veges';
import { VegesService } from './veges.service';

describe('VegetableService', () => {
  let service: VegesService;
  let injector: TestBed;

  let httpMock: HttpTestingController;

let  vege:IVeges[]=[];


  beforeEach(async () => {
     TestBed.configureTestingModule({
        imports:[HttpClientTestingModule, ReactiveFormsModule,
            FormsModule],
      providers: [ VegesService ]
    });
   service=TestBed.get(VegesService)
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

    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  /* --- test case to check getVegetable() --- */

  it('should getVegetables()',inject([HttpTestingController,VegesService],
      (httpMock:HttpTestingController,service:VegesService)=>{
        service.getVegetable().subscribe(resp=>expect(vege).toEqual(resp));
        const mockReq = httpMock.expectOne(service.url);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(vege); 
        httpMock.verify();     
      }
  ));

   /* --- test case to check getVegetableById() --- */

  it('should get vegetable by id',()=>{
    let response:IVeges;
    let vegetable ={
    id:111,
    name:"orange",
    category:Category.vegetables,
    price:180,
    image:"../../assets/images/orange.jpg",
    qnty:1,
    company:"Nagpur Suppliers",
    total:0,
    
   };

    const fn=spyOn(service, 'getVegetableById').and.returnValue(of(vegetable));
    service.getVegetableById(111).subscribe(res=>{response=res;expect(response).toEqual(vegetable);});
   expect(fn).toHaveBeenCalled();

});

 /* --- test case to check createVegetable() --- */

it('createVegetable() should post a vegetable & return vegetable as data',()=>{

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

  let vegetable2 ={    
    id:114,
    name:"potato",
    category:Category.vegetables, 
    price:40,
    image:"../../assets/images/potato.jpg",
    qnty:1,
    company:"Nagpur Suppliers",
    total:0,
  
   };
  vege =[...vege,vegetable1];
   service.createVegetable(vegetable1).subscribe(resp=>expect(resp).toEqual(vegetable1) )
   expect(vege.length).toEqual(3);
   const req = httpMock.expectOne(service.url);
   expect(req.request.method).toBe('POST');
   req.flush(vegetable1);

   });

  /* --- test case to check updateVegetable() --- */

   it('updateVegetable () should update a vegetable',()=>{
    let vegetable2 ={

      id:112,
      name:"grapes",
      category:Category.vegetables,
      price:300,
      image:"../../assets/images/grapes.jpg",
      qnty:1,
      company:"Nagpur Suppliers",
      total:0,

     };

     service.updateVegetable(vegetable2).subscribe(resp=>expect(resp).toEqual(vegetable2) )
     const req = httpMock.expectOne(`${service.url}/${vegetable2.id}`);
     expect(req.request.method).toBe('PUT');
     req.flush({vegetable2 });

     })

    /* --- test case to check deleteVegetable() --- */

     it('should check the deleteVegetable() method',()=>{

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
        
      let vegetable2 ={    
        id:114,
        name:"potato",
        category:Category.vegetables, 
        price:40,
        image:"../../assets/images/potato.jpg",
        qnty:1,
        company:"Nagpur Suppliers",
        total:0,      
      };

      vege=[...vege,vegetable1,vegetable2];  
      service.deleteVegetable(vegetable2.id).subscribe(resp=>console.log(resp));  
      expect(vege.length).toEqual(4);
    
      const req = httpMock.expectOne(`${service.url}/${vegetable2.id}`);
       expect(req.request.method).toBe('DELETE');
       req.flush(vegetable2);
    
    });
 
  });