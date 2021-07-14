import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/core/interfaces/article.interface";

// find all
export const loadArticles = createAction(
  '[Articles page] load articles',
  props<{ articles: Article[] }>()
)


export const articlesActions = {
  loadArticles
}