import { Component } from '@angular/core';
import { Event } from '../../../../model/event';
import { EventsService } from '../../../../events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css'
})
export class EventUpdateComponent {

  events:Event[]=[]
  event: Event = {
    id:0,
    title: '',
    description: '',
    eventType: '',
    musicSystem: false,
    foodType: '',
    price: 0,
    date: '',
    backdrop: '',
    imageUrl: ''
  };



  constructor(  private eventService: EventsService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    // Get the event ID from the route parameters
    const eventId = +this.route.snapshot.paramMap.get('eventId')!; // Convert the string to a number
    this.loadEvent(eventId);
  }

   // Load the event data from the backend
   loadEvent(id: number): void {
    this.eventService.getEventById(id).subscribe((eventData) => {
      this.event = eventData; // Populate the form with existing event data
    });
  
  }

  onSubmit(): void {
    this.eventService.updateEvent(this.event.id, this.event).subscribe(
      (updatedEvent) => {
        console.log('Event updated successfully:', updatedEvent);
        this.router.navigate(['/eventlist']); // Redirect to event list or details page
      },
      (error) => {
        console.error('Error updating event:', error);
      }
    );
  }
      
    fetchEvent():void{
      this.eventService.getEvents().subscribe((data)=>{
        this.events=data;
      })
    }

    onEditEvent(eventId: number): void {
      this.router.navigate([`/updateEvents/edit/${eventId}`]);  // Redirect to the edit page
    }


    onDeleteEvent(eventId: number): void {
      if (confirm('Are you sure you want to delete this event?')) {
        this.eventService.deleteEvent(eventId).subscribe(
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
      this.eventService.getEvents().subscribe(
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
