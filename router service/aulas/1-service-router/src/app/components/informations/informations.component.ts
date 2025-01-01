import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent implements OnInit {
  name: string = "";
  age: number = 0;

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
      this.name = this._activatedRoute.snapshot.queryParams["name"];
      this.age = this._activatedRoute.snapshot.queryParams["age"];
  }
}