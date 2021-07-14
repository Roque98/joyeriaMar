import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/interfaces/product.interface';

// load
export const loadProduct = createAction(
  '[Products page] load product',
  props<{products: Product[]}>()
)

const productActions = {
  loadProduct
}

export default productActions;