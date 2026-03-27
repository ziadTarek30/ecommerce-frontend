import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Auth } from './auth/auth';
import { AuthService } from './core/services/auth.service';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Footer, Auth, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    this._authService.authInit();
  }
  protected readonly title = signal('ecommerce-site');
}
