
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDividerModule, MatGridListModule, MatListModule,
  MatSidenavModule, MatSelectModule, MatRadioModule, MatTabsModule, MatCheckboxModule,MatBadgeModule, MatAutocompleteModule, MatTooltipModule, MatProgressSpinnerModule
} from '@angular/material';
import { NavbarGlobalComponent } from './navbar-global/navbar-global.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventCarouselComponent } from './event-carousel/event-carousel.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { EventReservationComponent } from './event-reservation/event-reservation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    NavbarGlobalComponent,
    EventsDetailComponent,
    EventDisplayComponent,
    EventCarouselComponent,
    SearchBarComponent,
    FooterComponent,
    EventReservationComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MiniCartComponent,


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule, MatDividerModule, MatGridListModule, MatListModule,
     MatSidenavModule, MatSelectModule, MatRadioModule, MatTabsModule, MatCheckboxModule,MatBadgeModule,MatAutocompleteModule,MatTooltipModule,MatProgressSpinnerModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MultiSelectAllModule,
    DragDropModule,
    RouterModule.forChild([
      { path: 'details/:id', component: EventsDetailComponent },
      { path: '', component: EventDisplayComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', component: EventDisplayComponent },

    ]),

    NgbModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    BreadcrumbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatIconModule, MatButtonModule,]
})
export class AppModule { }