import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './components/slider/slider.component';
import { RecomendedItemsComponent } from './components/recomended-items/recomended-items.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePage,
    SliderComponent,
    RecomendedItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
