import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { ArticlesModule } from './articles/articles.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CategoryModule,
    ArticlesModule,
    ProductModule,
  ]
})
export class PagesModule { }
