import { Component, Input, OnInit } from '@angular/core';
import { IVeges } from './veges';

@Component({
  selector: 'app-veges-details',
  templateUrl: './veges-details.component.html',
  styleUrls: ['./veges-details.component.css']
})
export class VegesDetailsComponent implements OnInit {
  
  @Input() vegetable:IVeges[]=[];

  ngOnInit(): void {
    
  }


}
