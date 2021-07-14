import { ArticlesState } from "src/app/pages/articles/ngrx/articles.reducer";
import { CategoriesState } from "src/app/pages/category/ngrx/categories.reducer";
import { PageState } from "src/app/pages/page.reducer";
import { ProductsState } from "src/app/pages/product/ngrx/product.reducer";


export interface AppState {
  articlesFeature: ArticlesState,
  categoriesFeature: CategoriesState,
  productsFeature: ProductsState,
  pageFeauture: PageState
}