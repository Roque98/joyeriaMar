import { createReducer, on } from '@ngrx/store';
import { Article } from 'src/app/core/interfaces/article.interface';
import { articlesActions } from './articles.actions';

export const articleFeatureKey = 'articlesFeature';

export interface ArticlesState {
  articles: Article[];
}

export const articleInitialState: ArticlesState = {
  articles: [],
};

const _articlesReducer = createReducer(
  articleInitialState,
  // load
  on(articlesActions.loadArticles, (state, { articles }) => {
    return {
      ...state,
      articles
    };
  }),
);

export function ArticleReducer(state: any, action: any) {
  return _articlesReducer(state, action);
}
