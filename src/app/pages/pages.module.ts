import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { ArticlesModule } from './articles/articles.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { pageFeatureKey, pageReducer } from './page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PageEffects } from './page.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CategoryModule,
    ArticlesModule,
    ProductModule,
    HttpClientModule,
    StoreModule.forFeature(pageFeatureKey, pageReducer),
    EffectsModule.forFeature([PageEffects])
  ]
})
export class PagesModule { }
