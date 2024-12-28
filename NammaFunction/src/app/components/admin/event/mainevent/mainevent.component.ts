import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainevent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mainevent.component.html',
  styleUrl: './mainevent.component.css'
})
export class MaineventComponent {
  cards = [
    {
      title: 'create-event',
      description: 'Manage registered users and their profiles.',
      icon: 'fas fa-user', // FontAwesome icon
      routerLink: '/dashboard/createEvents', // Changed to lowercase
    },
    {
      title: 'list-event',
      description: 'Manage registered users and their profiles.',
      icon: 'fas fa-user', // FontAwesome icon
      routerLink: '/dashboard/events', // Changed to lowercase
    }, {
      title: 'update-event',
      description: 'Manage registered users and their profiles.',
      icon: 'fas fa-user', // FontAwesome icon
      routerLink: '/dashboard/updateEvents', // Changed to lowercase
    }
  ]
   constructor(private router: Router) {} // Proper dependency injection
  
    navigateTo(routerLink: string): void {
      // Logic to navigate to the respective route
      console.log('Navigating to:', routerLink);
      this.router.navigate([routerLink]);
    }
}
