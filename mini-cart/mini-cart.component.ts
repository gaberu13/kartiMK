import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {
  @Input('groupedSeat') groupedSeat;
  constructor() { 
  
  }
 
  
  ngOnInit() {
    
  }

}
