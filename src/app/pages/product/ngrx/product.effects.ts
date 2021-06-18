import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ProductService } from './../product.service';
import productActions from './product.actions';
 
@Injectable()
export class ProductEffects {
 
  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProduct),
      exhaustMap(action =>
        this.productService.getProduct(action.idProduct).pipe(
          map(product => productActions.loadProductSuccess({ product })),
          catchError( error => of(productActions.loadProductError({error})))
        )  
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}