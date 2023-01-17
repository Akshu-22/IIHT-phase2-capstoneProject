import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,BehaviorSubject,catchError,tap,throwError, map } from "rxjs";
import { Category, IVeges } from "../veges/veges";


@Injectable({
    providedIn:'root'
})
export class VegesService{

  url="api/vegetable";
  vegetables:IVeges[]=[];

  private selectedVegetableSource= new BehaviorSubject<IVeges | null >(null);

 selectedVegetableChanges$=this.selectedVegetableSource.asObservable();
  foundIndex: number=0;

constructor(private http:HttpClient){}

getVegetable():Observable<IVeges[]>{  
    return this.http.get<IVeges[]>(this.url).pipe(
        tap(data=>{console.log(data);        
          this.vegetables=data;
    }),
        catchError(this.errorHandler)
    );
  }
  changeSelectedVegetable(selectedVegetable:IVeges | null):void{
  
    this.selectedVegetableSource.next(selectedVegetable);
    console.log(selectedVegetable); 
  }

  errorHandler=(err:any)=>{
     let errorMessage:string;
     if(err.error instanceof ErrorEvent)
       {
         errorMessage = `An error has occured ${err.error.message}`
       }
       else{
        errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
       }
       console.log(err);
       return throwError(errorMessage);
    }
  
  newVegetable():IVeges{
        return {
    
             id:0,
            name:'',
            category:Category.vegetables,
            price:0,
            image:'', 
            qnty:0 ,
            company:'',
            total:0      
        };
    
      }
  
  createVegetable(vegetable:IVeges):Observable<IVeges>{   
       const headers= new HttpHeaders({'Content-Type':'application/json'});
         const newVegetable={...vegetable,id:null};
         console.log(`in create method  ${this.url}`)
         return     this.http.post<IVeges>(this.url,newVegetable,{headers})
         .pipe(
           tap(data=>{
            console.log('in create new vegetable'+ JSON.stringify(data));         
           // this.vegetable.push(data);
           },
           catchError(this.errorHandler)
           )
         )
     }

  deleteVegetable(id:number):Observable<{}>{
      const headers= new HttpHeaders({'Content-Type':'application/json'});   
      const url= `${this.url}/${id}`;
      return this.http.delete<IVeges>(url,{headers})
      .pipe(
        tap(data=>{
          console.log('deleted vegetable'+id);
         const foundIndex = this.vegetables.findIndex(item=>item.id===id);
        /*  if(foundIndex > -1)
         this.vegetables.splice(foundIndex,1);*/
        }, 
        catchError(this.errorHandler))
      );
    }

  getVegetableById(id:number):Observable<IVeges>{
      return this.getVegetable().pipe(
        tap(()=>{console.log('fetch vegetable'+id);
         this.foundIndex =this.vegetables.findIndex(item=>item.id ==id);
        if(this.foundIndex > -1){
          this.vegetables[this.foundIndex];
            }
        }),
        map(()=>this.vegetables[this.foundIndex]),
        catchError(this.errorHandler)
        );
  
     }

  updateVegetable(vegetable:IVeges):Observable<IVeges>{
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      const url= `${this.url}/${vegetable.id}`;
      return this.http.put<IVeges>(url,vegetable, {headers}).pipe(
      tap(()=>{console.log('update vegetable'+vegetable.id);
      const foundIndex =this.vegetables.findIndex(item=>item.id === vegetable.id);
     /*  if(foundIndex > -1){
        this.vegetables[foundIndex]=vegetable;
          } */
      }),
      map(()=>vegetable),
      catchError(this.errorHandler)
      );
  
     }
  }
  
