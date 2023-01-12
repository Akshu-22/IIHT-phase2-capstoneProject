import { Component, OnInit } from '@angular/core';
import { VegesService } from '../shared/veges.service';
import { IVeges } from './veges';

@Component({
  selector: 'app-veges-list',
  templateUrl: './veges-list.component.html',
  styleUrls: ['./veges-list.component.css']
})
export class VegesListComponent implements OnInit {

  constructor(private vegesService:VegesService){};
  vegetable!:IVeges[];
  ngOnInit(): void {
    this.vegesService.getVegetable().subscribe((fash:IVeges[])=>{
      this.vegetable=fash;   

});
    
  }

}
