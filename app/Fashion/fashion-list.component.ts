import { Component, OnInit } from '@angular/core';
import { FashionService } from '../shared/fashion.service';
import { Ifash } from './fashion';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css']
})
export class FashionListComponent implements OnInit {

  constructor(private fashionService:FashionService){};
  fashion!:Ifash[];
  ngOnInit(): void {
    this.fashionService.getFashion().subscribe((fash:Ifash[])=>{
      this.fashion=fash;   

});
    
  }

}
