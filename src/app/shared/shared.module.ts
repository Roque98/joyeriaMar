import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { CardArticleComponent } from './components/card-article/card-article.component';

const components = [ProductCardComponent, MenuCategoriesComponent, CardArticleComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SharedModule {}
