import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
users:User[]=[]
}
