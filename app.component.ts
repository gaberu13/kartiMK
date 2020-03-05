import { EventDisplayService } from './Services/event-display.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karti.com.mk';

  constructor(private getEvents: EventDisplayService) {

  }

}
