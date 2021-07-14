import { createReducer, on } from "@ngrx/store";
import { pageActions } from "./page.actions";

export const pageFeatureKey = 'pageFeature';

export interface PageState {
  loading: boolean,
  loaded: boolean,
  error: any
}

export const pageInitialState: PageState = {
  loading: false,
  loaded: false,
  error: null
};

const _pageReducer = createReducer(
  pageInitialState,
  on(pageActions.loadData, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(pageActions.loadDataSuccess, (state) => {
    return {
      ...state,
      loaded: true,
      loading: false
    }
  }),
  on(pageActions.loadDataError, (state, {error}) => {
    return {
      ...state,
      error,
      loading: false
    }
  })
);

export function pageReducer(state: any, action: any) {
  return _pageReducer(state, action);
}