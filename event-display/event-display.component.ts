import { SharedEmitterServiceService } from './../shared-emitter-service.service';
import { Filter } from './../../../Models/Filter';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventDisplayService } from '../Services/event-display.service';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { EventModel } from 'Models/EventModel';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  subscription: Subscription;
  events: Observable<EventModel>;
  searchText = null;
  filter = new Filter("", 1, 120, true, "");



  constructor(private getEvents: EventDisplayService,
    private searchEmmitter: SharedEmitterServiceService,
    private eventEmmiter: SharedEmitterServiceService
  ) {
    this.getEvents.getEventsAll(this.filter)
      .subscribe(result => {
        this.events = result.d.events
        
        this.eventEmmiter.notifyEvents(this.events);
      })
  }
  ngOnInit() {
    this.subscription = this.searchEmmitter.getNotificationShow()
      .subscribe((data) => {
        this.searchText = data.notification;
      })
  }
}