import { Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/Dashboard/dashboard/dashboard.component';
import { EventListComponent } from './components/admin/event/event-list/event-list.component';
import { UserListComponent } from './components/admin/User/user-list/user-list.component';
import { PaymentListComponent } from './components/admin/payments/payment-list/payment-list.component';
import { BookingListComponent } from './components/admin/booking/booking-list/booking-list.component';
import { HomeComponent } from './components/admin/home/home.component';
import { MaineventComponent } from './components/admin/event/mainevent/mainevent.component';
import { createComponent } from '@angular/core';
import { CreateEventComponent } from './components/admin/event/create-event/create-event.component';
import { UpdateUserComponent } from './components/User/update-user/update-user.component';
import { EventUpdateComponent } from './components/admin/event/event-update/event-update.component';
import { EventUpdateListComponent } from './components/admin/event/event-update/event-update-list/event-update-list.component';
import { MainPageComponent } from './components/Homepage/main-page/main-page.component';
import { ShowEventComponent } from './components/eventDisplay/show-event/show-event.component';

export const routes: Routes = [

    
    {path:"dashboard",component:DashboardComponent,
        children:[
            {path:"home",component:HomeComponent},
            {path:"events",component:EventListComponent},
            {path:"booking",component:BookingListComponent},
            {path:"user",component:UserListComponent},
            {path:"showevents",component:MaineventComponent},
            {path:"payments",component:PaymentListComponent},
            {path:"createEvents",component:CreateEventComponent},
            {path:"updateEvents",component:EventUpdateListComponent},
            { path: 'edit/:eventId', component: EventUpdateComponent }
        ]
    },
    {path:"homepage",component:MainPageComponent},
    
    {path:"showevents",component:ShowEventComponent}
];
