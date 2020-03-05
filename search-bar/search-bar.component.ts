import { Subscription } from 'rxjs';
import { EventDisplayService } from './../Services/event-display.service';
import { SharedEmitterServiceService } from './../shared-emitter-service.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Filter } from 'Models/Filter';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText = null;
  items = null;
  localItems = null;
  filter = new Filter("", 1, 120, true, "");

  subscption: Subscription
  constructor(private searchEmmitter: SharedEmitterServiceService,
    private getEvents: EventDisplayService,
    private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    
    
    
  }
  emiitSearch() {

    this.searchEmmitter.notifyShow(this.searchText);
  }
  getEventsAll() {
    this.getEvents.getEventsAll(this.filter)
      .subscribe(result => {
        this.items = result.d.events;
     
      })
    
  }

}
