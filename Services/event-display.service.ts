import { filter } from 'minimatch';
import { ActivatedRoute } from '@angular/router';


import { Filter } from './../../../Models/Filter';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RowForZone } from 'Models/RowForZone';
import { SeatsForRowByEvent } from 'Models/SeatsForRowByEvent';
import { MapZonesForEvent } from 'Models/MapZonesForEvent';
import { AddNumeratedSeat } from 'Models/AddNumeratedSeat';
import { AddNotNumeratedSeat } from 'Models/AddNotNumeratedTickets';
import { updateCartModel } from 'Models/updateCartModel';



@Injectable({
  providedIn: 'root'
})
export class EventDisplayService {

  url = 'https://rave.st2/services/exportdata.asmx/';
  //url = 'http://karti.com.cms/services/exportdata.asmx/';
  header =
    {
      headers:
        new HttpHeaders(
          {
            // "Content-Type": "application/json"
          }),
       withCredentials: true,
    };


  constructor(private http: HttpClient,private route: ActivatedRoute) {


  }
  getEventsAll(filter: Filter): Observable<any> {
    return this.http.post(this.url + 'GetEvents', { filter }, this.header)
  }
  getEventsById(eventid: number): Observable<any> {
    return this.http.post(this.url + 'GetEventById', { eventId: eventid }, this.header);
  }
  getMapZonesForEvent(filter: MapZonesForEvent): Observable<any> {
    return this.http.post(this.url + 'GetMapZonesForEvent', { filter }, this.header);
  }
  getRowsForZone(filter: RowForZone): Observable<any> {
    return this.http.post(this.url + "GetRowsForZone", { filter }, this.header);
  }
  getSeatsForRowByEvent(filter: SeatsForRowByEvent): Observable<any> {
    return this.http.post(this.url + "GetSeatsForRowByEvent", { filter }, this.header);
  }
  addNumeratedSeat(model: AddNumeratedSeat): Observable<any> {
    return this.http.post(this.url + "AddNumeratedSeat", { model }, this.header);
  }
  addNotNumeratedTickets(model: AddNotNumeratedSeat): Observable<any> {
    return this.http.post(this.url + "AddNotNumeratedTickets", { model }, this.header);
  }
  removeCartItem(id): Observable<any> {
    return this.http.post(this.url + "RemoveCartItem", { id }, this.header);
  }
  removeSeat(id): Observable<any> {
    return this.http.post(this.url + "RemoveSeat", { id }, this.header);
  }
  getCart(): Observable<any> {
    return this.http.post(this.url + "GetCart", {}, this.header);
  }
  deleteCart(): Observable<any> {
    return this.http.post(this.url + "DeleteCart", {}, this.header);
  }
  getShippingMethodsForCart(): Observable<any> {
    return this.http.post(this.url + "GetShippingMethodsForCart", {}, this.header);
  }
  getCartGrouped(): Observable<any> {
    return this.http.post(this.url + "GetCartGrouped", {}, this.header);
  }
  getCountries(): Observable<any> {
    return this.http.post(this.url + "GetCountries", {}, this.header);
  }
  updateCart(order: updateCartModel): Observable<any> {
    return this.http.post(this.url + "UpdateCart", { order }, this.header);
  }
  createOrder(order: any): Observable<any> {
    return this.http.post(this.url + "CreateOrder", { order }, this.header);
  }
  getGroupedEvents(filter: any):Observable<any>{
  return this.http.post(this.url + "GetGroupedEvents",{filter},this.header);
  }


}
