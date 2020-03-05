<<<<<<< HEAD
import { Router } from '@angular/router';
import { EventDisplayService } from './../Services/event-display.service';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { SharedEmitterServiceService } from '../shared-emitter-service.service';
import { Subscription } from 'rxjs';
=======
import { Component, OnInit, HostListener } from "@angular/core";
>>>>>>> c91174b7b82521997277602e7d0fe8615909e852

@Component({
  selector: "navbar-global",
  templateUrl: "./navbar-global.component.html",
  styleUrls: ["./navbar-global.component.css"]
})
export class NavbarGlobalComponent implements OnInit {
  scrolling: boolean;
<<<<<<< HEAD
  seat = null;
  groupedSeat = null;
  subscription: Subscription;
  itemCount= null;
  changeTexte=null;
  toggleSearch= false;


  constructor(
    private sharedService: SharedEmitterServiceService, 
    private shareShow: SharedEmitterServiceService, 
    private getEvents: EventDisplayService,
    private router: Router ) {
    this.scrolling = false;
    this.changeTexte=false;
  }

  ngOnInit() {
    this.subscription = this.sharedService.getNotification()
      .subscribe((data) => {
       
        this.seat=data;
        this.getCartGrouped(this.seat)

      });
     
  }
 
  getCartGrouped(grouped){
    this.getEvents.getCartGrouped().subscribe(result=>{
      this.groupedSeat=result.d;
      grouped=this.groupedSeat;
      
    })
=======
  constructor() {
    this.scrolling = false;
  }

  ngOnInit() {

>>>>>>> c91174b7b82521997277602e7d0fe8615909e852
  }
  
 

  @HostListener("window:scroll", []) onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
<<<<<<< HEAD
    
    if (number < 55) {
      this.scrolling = false;
=======
    if (number < 55) {
      this.scrolling = false;
      // console.log(number)
>>>>>>> c91174b7b82521997277602e7d0fe8615909e852
    } else if (number > 55) {
      this.scrolling = true;
    }
  }
<<<<<<< HEAD
  private changeText(ez){
    this.changeTexte=ez;
    this.shareShow.notifyShowCart(this.changeTexte);

  }
  onToggleSearch() {
    this.toggleSearch = !this.toggleSearch;
  }
=======
>>>>>>> c91174b7b82521997277602e7d0fe8615909e852
}
