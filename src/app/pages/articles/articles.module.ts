import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPage } from './articles.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { articleFeatureKey, ArticleReducer } from './ngrx/articles.reducer';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticlesPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(articleFeatureKey, ArticleReducer),
    RouterModule
  ]
})
export class ArticlesModule { }
