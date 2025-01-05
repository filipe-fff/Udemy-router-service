import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCardsListService } from '../../../../services/user-cards-list.service';
import { CardsList } from '../../../../types/cards-list';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  cardsList$: Observable<CardsList> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _userCardsListService = inject(UserCardsListService);

  // redirectToDebit() {
  //   // this._router.navigate(["cards", "debit"]);
  //   this._router.navigate(["../debit"], { relativeTo: this._activatedRoute });
  // }

  ngOnInit() {
    this.cardsList$ = this._userCardsListService.getUserCardsByType("credito");
  }

  onCardCreditById(cardId: number) {
    this._router.navigate(["../", cardId], { relativeTo: this._activatedRoute })
  }
}