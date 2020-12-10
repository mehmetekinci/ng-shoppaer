import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ICart } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: ICart[] = [];

  private cartSub: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartSub = this.cartService.cartChange.subscribe((value) => {
      this.cart = value;
    });
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }
}
