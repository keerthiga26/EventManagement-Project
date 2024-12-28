import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../../model/booking';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../../../booking.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit {
  
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
    });
  }
}
