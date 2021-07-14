import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product.interface';
import productActions from './product.actions';


export const productsFeatureKey = 'productsFeature';

export interface ProductsState {
  products: Product[];
}

export const productsInitialState: ProductsState = {
  products: []
};

const _productsReducer = createReducer(
  productsInitialState,

  // load
  on(productActions.loadProduct, (state,{products}) => {
    return {
      ...state,
      products
    };
  }),

);

export function ProductsReducer(state: any, action: any) {
  return _productsReducer(state, action);
}
