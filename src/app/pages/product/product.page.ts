import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product.interface';
import { loadProduct } from './ngrx/product.actions';
import { State } from './ngrx/product.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})
export class ProductPage implements OnInit {

  id = '';
  // product$: Observable<Product> = this.store.select(state=>state.product)
  product ={
    finalPrice: 13,
    imageUrl:
      'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
    name: 'cursiva',
    quantity: 0,
    wholesalePrice: 0,
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) { 
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    // this.store.dispatch(loadProduct({idProduct: this.id}))
    // this.product$.subscribe((product) => {
    //   this.product = product;
    //   console.log(this.product);
      
    // })
  }

}
