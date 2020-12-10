import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable()
export class AuthService implements OnInit {
  private isLoggedIn: boolean = false;

  authChange: Subject<boolean> = new Subject<boolean>();

  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit() {}
  getAuth() {
    return this.isLoggedIn;
  }

  toggleAuthChange() {
    this.isLoggedIn = !this.isLoggedIn;
    this.authChange.next(this.isLoggedIn);
    this.cartService.resetCart();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
