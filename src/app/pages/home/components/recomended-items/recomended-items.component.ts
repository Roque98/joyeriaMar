import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/interfaces/appState.interface';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-recomended-items',
  templateUrl: './recomended-items.component.html',
  styleUrls: ['./recomended-items.component.scss']
})
export class RecomendedItemsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('productsFeature').subscribe((productState) => {
      const newProducts: Product[] = [];
      for (let i = 0; i < 3; i++) {
        newProducts.push(productState.products[i]);
      }
      this.products = newProducts;
    })
  }

}
