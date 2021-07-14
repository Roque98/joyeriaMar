import { createAction, props } from "@ngrx/store";
import { Category } from "src/app/core/interfaces/category.interface";


// load
export const loadCategories = createAction(
  '[Categories page] load Categories',
  props<{categories: Category[]}>()
)



export const categoriesActions = {
  loadCategories,
}