import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product.interface';
import productActions from './product.actions';

export const productFeatureKey = 'product';

export interface State {
  product: Product;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: State = {
  product: {
    finalPrice: 13,
    imageUrl:
      'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
    name: 'cursiva',
    quantity: 0,
    wholesalePrice: 0,
  },
  loaded: false,
  loading: false,
  error: null,
};

const _prouductsReducer = createReducer(
  initialState,
  on(productActions.loadProduct, (state) => ({ ...state, loading: true })),
  on(productActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    product,
  })),
  on(productActions.loadProductError, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function reducer(state: any, action: any){
  return _prouductsReducer(state, action);
}
