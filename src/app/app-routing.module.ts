import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/components/cart.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ShopProductComponent } from './product/shop-product/shop-product.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'shop-product/:id', component: ShopProductComponent},
  {path: 'spinner', component: SpinnerComponent},
  {path: 'checkout', component: CartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];