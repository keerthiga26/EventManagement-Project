import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed property name
})
export class HomeComponent {
  cards = [
    {
      title: 'Users',
      description: 'Manage registered users and their profiles.',
      icon: 'fas fa-user', // FontAwesome icon
      routerLink: '/dashboard/user', // Changed to lowercase
    },
    {
      title: 'Bookings',
      description: 'View and manage event bookings.',
      icon: 'fas fa-calendar-check', // FontAwesome icon
      routerLink: '/dashboard/booking', // Changed to lowercase
    },
    {
      title: 'Events',
      description: 'Create, update, and view event details.',
      icon: 'fas fa-calendar-alt', // FontAwesome icon
      routerLink: '/dashboard/showevents', // Changed to lowercase
    },
    {
      title: 'Payments',
      description: 'Track and manage payments for bookings.',
      icon: 'fas fa-credit-card', // FontAwesome icon
      routerLink: '/dashboard/payments', // Changed to lowercase
    },
  ];

  constructor(private router: Router) {} // Proper dependency injection

  navigateTo(routerLink: string): void {
    // Logic to navigate to the respective route
    console.log('Navigating to:', routerLink);
    this.router.navigate([routerLink]);
  }
}
