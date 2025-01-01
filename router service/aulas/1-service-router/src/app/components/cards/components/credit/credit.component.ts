import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  redirectToDebit() {
    // this._router.navigate(["cards", "debit"]);
    this._router.navigate(["../debit"], { relativeTo: this._activatedRoute });
  }
}