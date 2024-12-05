import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Booking} from '../../models/booking.model';
import {BookingService} from '../../service/booking.service';
import {CommonModule} from '@angular/common';
import {BookingResumeComponent} from '../../components/booking/booking-resume/booking-resume.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent, CommonModule, BookingResumeComponent
  ],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{

  bookings:Booking[]=[];

  constructor(private bookingservice:BookingService) {
  }

  ngOnInit(): void {
    this.bookings=this.bookingservice.getBookings();
  }



}
