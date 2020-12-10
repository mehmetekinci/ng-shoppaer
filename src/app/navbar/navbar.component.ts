import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authChange.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  onToggle() {
    this.authService.toggleAuthChange();
  }
}
