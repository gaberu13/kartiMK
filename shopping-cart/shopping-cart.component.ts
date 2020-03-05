import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventDisplayService } from '../Services/event-display.service';
import { SharedEmitterServiceService } from '../shared-emitter-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  @Input('seat') seats;
  @Input('showbtns') showbtns;
  @Input('showbtns2') showbtns2;
  @Input('groupedSeat') groupedSeat;
  show  : boolean;
  subscription: Subscription;
  subscription2: Subscription;
  changeText = null;


  constructor(private getEvents: EventDisplayService,
    private sharedService: SharedEmitterServiceService,
    private shareShow: SharedEmitterServiceService) { 
      // this.changeText = false;
      
    }

  private removeCart(id) {
    this.getEvents.removeCartItem(id)
      .subscribe(result => {
        this.seats = result.d;
        this.sharedService.notify(this.seats);

      })
  }
  private delete() {
    this.getEvents.deleteCart()
      .subscribe(result => {
        this.seats = null;
     
        this.groupedSeat = result.d;
         this.sharedService.notify(this.groupedSeat);
      })
  }

  ngOnInit() {
     this.sharedService.getNotification()
      .subscribe((data) => {
        this.seats=data;
        this.getCartGrouped(this.seats)
      });

      this.subscription2 = this.shareShow.getNotificationShowCart()
      .subscribe((data) => {
        this.changeText=data.notification;
      });
     
  }
  getCartGrouped(grouped){
    this.getEvents.getCartGrouped().subscribe(result=>{
      this.groupedSeat=result.d;
      grouped=this.groupedSeat;
    
    })
  }
  



}
