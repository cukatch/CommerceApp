import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products', component:
      ProductListComponent
  },
  {
    path: 'checkout', component:
      CartComponent
  },
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', component:
      ErrorPageComponent
  }];

export class AppRoutingModule { }
