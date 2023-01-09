import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { routes } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CartModule,
    RouterModule.forRoot(routes) //router here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
