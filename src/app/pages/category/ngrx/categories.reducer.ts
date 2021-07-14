import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/core/interfaces/category.interface';
import { categoriesActions } from './categories.actions';

export const categoriesFeatureKey = 'categoriesFeature';

export interface CategoriesState {
  categories: Category[];
}

export const categoriesInitialState: CategoriesState = {
  categories: []
};

const _categoriesReducer = createReducer(
  categoriesInitialState,
  // load
  on(categoriesActions.loadCategories, (state,{categories}) => {
    return {
      ...state,
      categories
    };
  }),
);

export function CategoriesReducer(state: any, action: any) {
  return _categoriesReducer(state, action);
}
