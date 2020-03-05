import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReservationComponent } from './event-reservation.component';

describe('EventReservationComponent', () => {
  let component: EventReservationComponent;
  let fixture: ComponentFixture<EventReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventReservationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
