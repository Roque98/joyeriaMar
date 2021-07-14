import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPage } from './pages/articles/articles.page';
import { CategoryComponent } from './pages/category/category.component';
import { HomePage } from './pages/home/home.page';
import { ProductPage } from './pages/product/product.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'article/:idArticle',component: ArticlesPage },
  { path: 'article/:idArticle/category/:idCategory', component: CategoryComponent },
  { path: 'product/:idProduct', component: ProductPage },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
