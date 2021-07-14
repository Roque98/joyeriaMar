import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/interfaces/appState.interface';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss'],
})
export class MenuCategoriesComponent implements OnInit {
  constructor(
    public store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  openMenu(idArticle: string) {
    const element = document.getElementById(`${idArticle}Element`);
    element?.click();
  }
}
