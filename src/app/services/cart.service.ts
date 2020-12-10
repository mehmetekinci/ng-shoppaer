import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product.service';
export interface ICart {
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
}
@Injectable()
export class CartService {
  cart: ICart[] = [];

  cartChange: Subject<ICart[]> = new Subject<ICart[]>();

  constructor(private productService: ProductService) {}

  addProductToCart(id: number) {
    const existingProduct = this.cart.find((p) => p.id === id);
    if (existingProduct) {
      return {
        ...existingProduct,
        quantity: existingProduct.quantity++,
        price: (existingProduct.price +=
          existingProduct.price / (existingProduct.quantity - 1)),
      };
    }

    const product = this.productService.getProduct(id);
    this.cart.push({ ...product, quantity: 1 });
  }
  get sumPrice() {
    return this.cart.length > 0
      ? this.cart
          .map((obj) => obj.price)
          .reduce((a, b) => {
            return a + b;
          })
      : 0;
  }
  getCart() {
    return this.cart;
  }
  resetCart() {
    this.cart = [];
    this.cartChange.next(this.cart);
  }
}
