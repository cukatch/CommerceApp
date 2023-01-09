import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, ShopProductComponent],
  imports: [
    CommonModule, FormsModule, BrowserModule
  ],
  exports: [ProductListComponent, ProductCardComponent]
})
export class ProductModule { }

