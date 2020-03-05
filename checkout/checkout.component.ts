import { SharedEmitterServiceService } from './../shared-emitter-service.service';
import { filter } from 'minimatch';
import { EventDisplayService } from './../Services/event-display.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  seat = null;
  shoppingMethods = null;
  showbtns = false;
  showbtns2 = false;
  countrys = null;
  metods = null;
  shopping = {};
  error = null;
  checkEmptyCart = false;
  groupedSeat= null;
  bgImageVariable= null;


  constructor(private getEvents: EventDisplayService,
    private sharedService: SharedEmitterServiceService) {
  }

  ngOnInit() {
    this.getCart();
    this.getShippingMethodsForCart();
    this.getCounty();
    
  }
  getCartGrouped(ez){
    this.getEvents.getCartGrouped().subscribe(result=>{
      this.groupedSeat=result.d;
      ez=this.groupedSeat;
    
    })
  }

  private getCart() {
    this.getEvents.getCart()
      .subscribe(result => {
        this.seat = result.d;
        this.bgImageVariable='http://rave.st2/'+ this.seat.Image;
        this.getCartGrouped(this.seat);
        if (this.seat.Items != 0) {
          this.checkEmptyCart = true;
        }
      })
  }

  private getShippingMethodsForCart() {
    this.getEvents.getShippingMethodsForCart()
      .subscribe(result => {
        this.shoppingMethods = result.d;
      })
  };

  private getCounty() {
    this.getEvents.getCountries()
      .subscribe(result => {
        this.countrys = result.d;
      })
  }

  private updateCart(item) {
    this.seat.ShippingDetails = [];
    this.seat.Customer = this.seat.Customer || {};
    for (var ndx in this.shoppingMethods) {
      var method = this.shoppingMethods[ndx];
      if (!!item) {
        this.seat.ShippingDetails.push({
          EventId: method.Event.Id,
          ShippingMethodId: item.Id,
          Price: item.PriceSecond,
          ShippingMethod: item
        });
      }
    }
    let update = this.seat;
    this.getEvents.updateCart(update)
      .subscribe(result => {
        this.seat = result.d;
        this.sharedService.notify(this.seat);
      })
  }

  private createOrder(item) {
    this.getEvents.createOrder(item)
      .subscribe(result => {
        this.seat = result.d;
        location.href="https://rave.st2/payment/PrepareOrderPayment?orderid=" + this.seat.Id;
      }, (error => {
        this.error = error.error.Errors;
        this.error.forEach(err => {
          if(err.Messages == "Email addresses do not match"){
            this.seat.Customer.ConfirmEmail="";
          }
        });
       
      }))
 
  }
  getErrors(key){
    if(!this.error){
      return [];
    }
    for (var ndx in this.error){
      var err =this.error[ndx];
      if(err.Key ==key){
        return err.Messages;
      }
    }
    return [];
  }
  

}
