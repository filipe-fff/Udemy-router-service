import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  
  redirectToCredit() {
    this._router.navigate(["../credit"], { relativeTo: this._activatedRoute});
  }
}