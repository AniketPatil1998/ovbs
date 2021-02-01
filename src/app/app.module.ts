import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule , ReactiveFormsModule}from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { VenueownerregisterComponent } from './venueownerregister/venueownerregister.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { VownerComponent } from './vowner/vowner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { VenueregisterComponent } from './venueregister/venueregister.component';
import { VenueComponent } from './venue/venue.component';
import { CityComponent } from './city/city.component';
import { LocationComponent } from './location/location.component';
import { VlocationComponent } from './vlocation/vlocation.component';
import { BookingComponent } from './booking/booking.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    AdminregisterComponent,
    CustomerregisterComponent,
    VenueownerregisterComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    CustomerComponent,
    VownerComponent,
    FooterComponent,
    ContactusComponent,
    VenueregisterComponent,
    VenueComponent,
    CityComponent,
    LocationComponent,
    VlocationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ModalModule.forRoot(),ReactiveFormsModule,HttpClientModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
