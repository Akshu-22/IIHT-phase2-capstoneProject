import { Component, Input, OnInit } from '@angular/core';
import { Ifash } from './fashion';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent implements OnInit {
  @Input() fashion:Ifash[]=[];
  
  ngOnInit(): void {
    
  }

}
