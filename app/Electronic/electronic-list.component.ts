import { Component, OnInit } from '@angular/core';
import { ElectronicService } from '../shared/electronic.service';
import { IEle } from './electronic';

@Component({
  selector: 'app-electronic-list',
  templateUrl: './electronic-list.component.html',
  styleUrls: ['./electronic-list.component.css']
})
export class ElectronicListComponent implements OnInit{

  constructor(private electronicService:ElectronicService){};
  electronic!:IEle[];
  ngOnInit(): void {
    this.electronicService.getElectronic().subscribe((ele:IEle[])=>{
      this.electronic=ele;   

});

}
}
