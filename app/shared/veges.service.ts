import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IVeges } from "../veges/veges";



@Injectable({
    providedIn:'root'
})
export class VegesService{

  url="api/vegetable";

constructor(private http:HttpClient){}

getVegetable():Observable<IVeges[]>{

    return this.http.get<IVeges[]>(this.url);

}
}