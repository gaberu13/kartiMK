
import { EventDisplayService } from './../Services/event-display.service';
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  events = null;
  Id: any;
  show: boolean;
  errorhandler = null;
  bgImageVariable= null;
  
  constructor(private route: ActivatedRoute,
    private getEvents: EventDisplayService,
    private router: Router) {
      
  }

  ngOnInit() {
    this.sendId();
    if (isNaN(this.Id)) {
      this.router.navigate(['/']);
    } else {
      this.getEventbyId();
    }
    
   
   
  }

  private getEventbyId() {

    this.getEvents.getEventsById(this.Id)
      .subscribe(result => {
        this.events = result.d;
      
        this.bgImageVariable='http://rave.st2/'+ this.events.Image;
      }, (err => {
        this.router.navigate(['/']);
      }))

  }

sendId(){
  this.route.paramMap.subscribe(params=>{
    this.Id=params.get("id");
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  })
  
}

  


}