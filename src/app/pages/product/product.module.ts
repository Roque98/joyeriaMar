import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './product.page';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './ngrx/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './ngrx/product.effects';



@NgModule({
  declarations: [
    ProductPage,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductModule { }
