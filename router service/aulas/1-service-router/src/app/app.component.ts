import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _router = inject(Router);

  navegationToInitial() {
    this._router.navigate(["initial"], { queryParams: { "isActive": true, "isAdmin": false } });
  }

  navegationToContacts() {
    this._router.navigate(["contacts"]);
  }

  navegationToInformations() {
    this._router.navigate(["informations"], { queryParams: { name: "Maria", age: 30 } });
  }

  navegationToCards() {
    this._router.navigate(["cards"]);
  }
}