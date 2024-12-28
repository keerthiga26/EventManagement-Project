import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Payment } from '../../../../model/payment';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent {

  payments:Payment[]=[]

}
