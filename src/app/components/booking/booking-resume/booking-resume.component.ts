import {Component, Input} from '@angular/core';
import {Booking, BookingStatus} from '../../../models/booking.model';
import {CommonModule} from '@angular/common';
import {BookingService} from '../../../service/booking.service';
import {BookingFormComponent} from '../booking-form/booking-form.component';

@Component({
  selector: 'app-booking-resume',
  standalone: true,
  imports: [
    BookingFormComponent
  ],
  templateUrl: './booking-resume.component.html',
  styleUrl: './booking-resume.component.css'
})
export class BookingResumeComponent {

  @Input()
  bookingInput:Booking= new Booking(0,"","","",0,"",new Date("2024-12-01T16:20:00"),new Date("2024-12-01T16:20:00"),BookingStatus.CONFIRM);

constructor(private bookingService:BookingService) {
}

deleteBooking(bookingId:number){
    this.bookingService.deleteBooking(bookingId);
}

}
