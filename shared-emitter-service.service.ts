import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedEmitterServiceService {

    private subject= new Subject<any>();
    private subject2= new Subject<any>();
    private subject3= new Subject<any>();
    private subject4= new Subject<any>();
  
    notify(notification: any) {
      this.subject.next({ notification });
    }
  
    getNotification(): Observable<any> {
      return this.subject.asObservable();
    }
    notifyShow(notification: any) {
      this.subject2.next({ notification });
    }
  
    getNotificationShow(): Observable<any> {
      return this.subject2.asObservable();
    }
    notifyShowCart(notification: any) {
      this.subject3.next({ notification });
    }
  
    getNotificationShowCart(): Observable<any> {
      return this.subject3.asObservable();
    }
    notifyEvents(notification: any) {
      this.subject4.next({ notification });
    }
  
    getNotificationEvents(): Observable<any> {
      return this.subject4.asObservable();
    }
  
  constructor() { }
}
