import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product.interface';

export const loadProduct = createAction(
  '[Product page] load product',
  props<{ idProduct: string }>()
);

export const loadProductSuccess = createAction(
  '[Product page] load product success',
  props<{ product: Product}>()
)

export const loadProductError = createAction(
  '[Product page] load product error',
  props<{ error: any}>()
)

const productActions = {
  loadProduct,
  loadProductSuccess,
  loadProductError
}

export default productActions;