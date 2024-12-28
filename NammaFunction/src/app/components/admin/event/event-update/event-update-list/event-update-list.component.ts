import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../../../../../events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../../../model/event';

@Component({
  selector: 'app-event-update-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './event-update-list.component.html',
  styleUrl: './event-update-list.component.css'
})
export class EventUpdateListComponent {
  events:Event[]=[]
  event:Event={ id:0,title: "",description: "",eventType: "",musicSystem: false,
    foodType: "",
    price: 0.0,
    date: "",
    backdrop: "",
    imageUrl: ""}
    constructor(private service:EventsService ,private router: Router , private route: ActivatedRoute){}



    ngOnInit(): void {
      this.fetchEvent();
      }

      
    fetchEvent():void{
      this.service.getEvents().subscribe((data)=>{
        this.events=data;
      })
    }

    onEditEvent(eventId: number): void {
      this.router.navigate(['/dashboard/edit/'+eventId]);  // Redirect to the edit page
    }


    onDeleteEvent(eventId: number): void {
      if (confirm('Are you sure you want to delete this event?')) {
        this.service.deleteEvent(eventId).subscribe(
          () => {
            alert('Event deleted successfully!');
            this.loadEvents();  // Reload the events after deletion
          },
          (error) => {
            console.error('Error deleting event:', error);
            this.loadEvents();
          }
        );
      }
    }

    loadEvents(): void {
      this.service.getEvents().subscribe(
        (eventData: Event[]) => {
          this.events = eventData;  // Assign the fetched events to the events array
        },
        (error) => {
          console.error('Error fetching events:', error);
          alert('Could not load the events.');
        }
      );
    }
}
