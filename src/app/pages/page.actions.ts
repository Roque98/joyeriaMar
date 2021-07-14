import { createAction, props } from "@ngrx/store"

// get data
export const loadData = createAction(
  '[Page] load data'
)

export const loadDataSuccess = createAction(
  '[Page] load data success'
)

export const loadDataError = createAction(
  '[Page] load data error',
  props<{error: any}>()
)

export const pageActions = {
  loadData,
  loadDataSuccess,
  loadDataError,
}