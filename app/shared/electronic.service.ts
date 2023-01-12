import { I18nSelectPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEle } from "../Electronic/electronic";


@Injectable({
    providedIn:'root'
})
export class ElectronicService{

  url="api/electronic";

constructor(private http:HttpClient){}

getElectronic():Observable<IEle[]>{

    return this.http.get<IEle[]>(this.url);

}
}