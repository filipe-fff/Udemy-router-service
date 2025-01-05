import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CardsList } from '../../../../types/cards-list';
import { UserCardsListService } from '../../../../services/user-cards-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent implements OnInit {
  cardsList$: Observable<CardsList> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _userCardsListService = inject(UserCardsListService);
  
  // redirectToCredit() {
  //   this._router.navigate(["../credit"], { relativeTo: this._activatedRoute});
  // }

  ngOnInit() {
      this.cardsList$ = this._userCardsListService.getUserCardsByType("debito");
  }

  onCardDebitById(cardId: number) {
    this._router.navigate(["../", cardId], { relativeTo: this._activatedRoute });
  }
}