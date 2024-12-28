import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http:HttpClient) { }

  private apiUrl="http://localhost:8080/booking"

  getBooking(id:number):Observable<Booking>{
    return this.http.get<Booking>(`${this.apiUrl}/${id}`)
  }

  getBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.apiUrl)
  }

  postBookings(booking:Booking):Observable<Booking>{
    return this.http.post<Booking>(this.apiUrl,booking)
  }

  updateBooking(id:number,booking:Booking):Observable<Booking>{
    return this.http.put<Booking>(`${this.apiUrl}/${id}`,booking )
  }

  deleteBooking(id:number):Observable<Booking>{
    return this.http.delete<Booking>(`${this.apiUrl}/${id}`)
  }
}
