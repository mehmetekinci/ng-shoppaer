import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from '../../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: IProduct;
  isLoggedIn: boolean;
  private authSub: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getAuth();
    this.authSub = this.authService.authChange.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  ngOnChanges() {}
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  onAddToCart(id) {
    this.cartService.addProductToCart(id);
  }
}
