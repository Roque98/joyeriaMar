import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { categoriesFeatureKey, CategoriesReducer } from './ngrx/categories.reducer';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(categoriesFeatureKey, CategoriesReducer)
  ]
})
export class CategoryModule { }
