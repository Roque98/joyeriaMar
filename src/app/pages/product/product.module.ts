import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './product.page';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { productsFeatureKey, ProductsReducer } from './ngrx/product.reducer';




@NgModule({
  declarations: [
    ProductPage,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature(productsFeatureKey, ProductsReducer)
  ]
})
export class ProductModule { }
