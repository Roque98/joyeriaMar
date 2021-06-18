import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPage } from './articles.page';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ArticlesPage
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ArticlesModule { }
