import { Component, inject, Input } from '@angular/core';
import { UserCardsListService } from '../../../../services/user-cards-list.service';
import { ICard } from '../../../../interfaces/card.interface';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  userCard$: Observable<ICard | undefined> = of({} as ICard);

  private readonly _userCardsListService = inject(UserCardsListService);

  @Input() set cardId(value: string) {
    this.userCard$ = this._userCardsListService.getUserCardById(+value);
  };
}