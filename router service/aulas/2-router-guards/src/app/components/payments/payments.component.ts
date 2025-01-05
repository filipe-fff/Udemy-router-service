import { Component } from '@angular/core';
import { DebitComponent } from '../debit/debit.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [ DebitComponent ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent { }