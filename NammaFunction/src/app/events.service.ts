import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './model/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsUrl = 'http://localhost:8080/event';
  constructor(private http:HttpClient) { }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.eventsUrl)

  }


  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }

  postEvent(event:Event):Observable<Event>{
          return this.http.post<Event>(this.eventsUrl,event)
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.eventsUrl}/${id}`, event); 
  }
  
  deleteEvent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.eventsUrl}/${id}`);
  }
}
