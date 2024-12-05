import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {BookingService} from '../../../service/booking.service';
import {CommonModule, NgClass} from '@angular/common';
import {Booking, BookingStatus} from '../../../models/booking.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass,CommonModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {


  formBooking:FormGroup;

  bookingInput:Booking | null =null;

  constructor(private routes:Router,formBookings:FormBuilder,private bookingService:BookingService) {
    this.formBooking=formBookings.group({
      'client':['',[Validators.required,Validators.minLength(0),Validators.maxLength(50)]],
      'phone':['',[Validators.required]],
      'email':['',[Validators.required]],
      'persons':['',[Validators.required,Validators.min(0),Validators.max(50)]],
      'notes':['',[Validators.required,Validators.maxLength(250)]],
      'dates':['',[Validators.required]]
    })

  }

  onSubmit(): void {

      if (this.formBooking.valid) {
        console.log('Formulario correcto y creamos nueva reserva');


        const id: number = Math.floor(Math.random() * 100);
        const client = this.formBooking.get('client')?.value;
        const phone = this.formBooking.get('phone')?.value;
        const email = this.formBooking.get('email')?.value;
        const persons = this.formBooking.get('persons')?.value;
        const notes = this.formBooking.get('notes')?.value;
        const date: Date = new Date();
        const dateCreation: Date = this.formBooking.get('dates')?.value;
        const status = BookingStatus.PENDING;


        let  booking:Booking = new Booking(id,client,phone,email,persons,notes,date,dateCreation,status);

        console.log(booking);

        this.bookingService.addBooking(booking);

        this.routes.navigate(['/bookings'])
        this.formBooking.reset();


      } else {
        console.log(`Formulario con errores y voy a mostrar los errores ${this.formBooking.get('client')?.errors}`)
      }

    }





}
