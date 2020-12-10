import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './home/products/products.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductItemComponent } from './home/products/product-item/product-item.component';
import { CreateProductComponent } from './dashboard/create-product/create-product.component';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', canActivate: [AuthGuardService], component: CartComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    DashboardComponent,
    ProductItemComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CartService, ProductService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
