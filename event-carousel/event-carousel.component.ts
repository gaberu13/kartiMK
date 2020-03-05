
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent {
  @Input('events') events;
  @Input('images') images;

  constructor() {
  }
}

