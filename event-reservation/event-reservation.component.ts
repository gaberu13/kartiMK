import { filter } from 'minimatch';
import { AddNumeratedSeat } from './../../../Models/AddNumeratedSeat';
import { Component, OnInit, Input } from '@angular/core';
import { RowForZone } from 'Models/RowForZone';
import { SeatsForRowByEvent } from 'Models/SeatsForRowByEvent';
import { EventDisplayService } from '../Services/event-display.service';
import { MapZonesForEvent } from 'Models/MapZonesForEvent';
import { AddNotNumeratedSeat } from 'Models/AddNotNumeratedTickets';
import { SharedEmitterServiceService } from '../shared-emitter-service.service';


@Component({
  selector: 'event-reservation',
  templateUrl: './event-reservation.component.html',
  styleUrls: ['./event-reservation.component.css']
})
export class EventReservationComponent implements OnInit {
  @Input('show') show;
  @Input('Id') Id;


  constructor(
    private sharedService: SharedEmitterServiceService, private getEvents: EventDisplayService) {

  }

  actualZone = null;
  rowForZone = null;
  actualRowForZone = null;
  seatsForRow = null;
  mapZones = null;
  seat = null;
  numberOfTickets = 1;
  groupedSeat = null;
  showbtns = true;
  error = null;
  showAlert = false;



  ngOnInit() {
    this.getMapZonesForEvent();
    this.getCart();



  }

  private getMapZonesForEvent() {
    let mapZonesForEvent = new MapZonesForEvent(this.Id);

    this.getEvents.getMapZonesForEvent(mapZonesForEvent)
      .subscribe(result => {
        this.mapZones = result.d;
        this.actualZone = this.mapZones[0];
        this.getRowsForZone();
      });
  }


  private getRowsForZone() {
    let rowForZoneFilter = new RowForZone(this.Id, this.actualZone.Id);
    this.getEvents.getRowsForZone(rowForZoneFilter)
      .subscribe(result => {
        this.rowForZone = result.d;
      });
  }

  private getSeatsForRowByEvent() {
    let seatsForRowByEvent = new SeatsForRowByEvent(this.actualZone.Id, this.actualRowForZone.Row, this.Id);

    this.getEvents.getSeatsForRowByEvent(seatsForRowByEvent)
      .subscribe(result => {
        this.seatsForRow = result.d;
      });

  }

  private addNumeratedSeatt(seatId) {
    let addNumeratedSeat = new AddNumeratedSeat(seatId);
    this.getEvents.addNumeratedSeat(addNumeratedSeat)
      .subscribe(result => {
        this.seat = result.d;
        this.isSeatInCart(this.seat);
        this.sharedService.notify(this.seat);

      }, (error => {
        this.error = error;
        this.ErrorAnimation();
      }))
  }
  private addNotNumeratedSeat() {
    let notNumerated = new AddNotNumeratedSeat(this.numberOfTickets, this.actualZone.Id, this.Id);

    this.getEvents.addNotNumeratedTickets(notNumerated)
      .subscribe(result => {
        this.seat = result.d;
        this.sharedService.notify(this.seat);



      }, (error => {
        this.error = error;
        this.ErrorAnimation();

      }))

  }

  private removeCart(id) {
    this.getEvents.removeCartItem(id)
      .subscribe(result => {
        this.seat = result.d;
        this.sharedService.notify(this.seat);


      })
  }
  private removeSeat(id) {
    this.getEvents.removeSeat(id)
      .subscribe(result => {
        this.seat = result.d;
        this.sharedService.notify(this.seat);
      })
  }
  private getCart() {
    this.getEvents.getCart()
      .subscribe(result => {
        this.seat = result.d;

        this.sharedService.notify(this.seat);
      })
  }


  private increment() {
    if (this.numberOfTickets == 10) {
      return;
    }
    this.numberOfTickets = this.numberOfTickets + 1;


  }
  private decrement() {
    if (this.numberOfTickets == 1) {
      return;
    }
    this.numberOfTickets = this.numberOfTickets - 1;
  }
  private seatToggle(id) {
    if (!!this.isSeatInCart(id)) {
      this.removeSeat(id.Id)

    } else this.addNumeratedSeatt(id.Id);

  }

  private getCartGrouped() {
    this.getEvents.getCartGrouped()
      .subscribe(result => {
        this.seat = result.d;

      })
  }

  private isSeatInCart(eventSeat) {
    for (var cart in this.seat.Items) {
      var item = this.seat.Items[cart];
      if (item.EventSeat.Id === eventSeat.Id) {
        return true;
      }
    }
  }

  private isSeatAvaiable(seat) {
    return seat.Status === 0 && !seat.NotAvailable;
  }

  private availabilityIcon(seat) {
    if (!this.isSeatAvaiable(seat)) {
      return 'https://raveks.com/images/checkeddisabled.gif';
    }
    if (this.isSeatInCart(seat)) {
      return 'https://raveks.com/images/booked.gif';
    }
    return 'https://raveks.com/images/notchecked.gif';
  }
  close() {
    this.showAlert = true;
  }
  ErrorAnimation() {
    this.showAlert = true;
    setTimeout(() => this.close(), 3000);
  }



}

