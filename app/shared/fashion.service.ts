import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ifash } from "../Fashion/fashion";



@Injectable({
    providedIn:'root'
})
export class FashionService{

  url="api/fashion";

constructor(private http:HttpClient){}

getFashion():Observable<Ifash[]>{

    return this.http.get<Ifash[]>(this.url);

}
}