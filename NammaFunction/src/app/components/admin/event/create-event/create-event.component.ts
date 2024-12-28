import { Component } from '@angular/core';
import { EventsService } from '../../../../events.service';
import { Router } from '@angular/router';
import { Event } from '../../../../model/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  events:Event[]=[]
  event:Event={ id:0,title: "",description: "",eventType: "",musicSystem: false,
    foodType: "",
    price: 0.0,
    date: "",
    backdrop: "",
    imageUrl: ""}
  isFormVisible: boolean=false;

  constructor(private service:EventsService,private router: Router){}

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  postEvent(): void {
    this.service.postEvent(this.event).subscribe(
      (response) => {
        console.log('Event posted successfully:', response);
        // Optionally reset the form or show a success message
      },
      (error) => {
        console.error('Error posting event:', error);
      }
    );
  }

}
