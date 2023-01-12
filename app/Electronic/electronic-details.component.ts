import { Component, Input, OnInit } from '@angular/core';
import { IEle } from './electronic';

@Component({
  selector: 'app-electronic-details',
  templateUrl: './electronic-details.component.html',
  styleUrls: ['./electronic-details.component.css']
})
export class ElectronicDetailsComponent implements OnInit {
 
  @Input() electronic:IEle[]=[];

  ngOnInit(): void {
    
  }
  

}
