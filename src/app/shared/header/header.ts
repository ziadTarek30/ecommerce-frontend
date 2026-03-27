import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { ITokenInfo } from '../../core/models/auth.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  constructor(private _cartService: CartService, private _authService: AuthService) {}
  userData!: ITokenInfo | null
  ngOnInit(): void {
    this._authService.getAuthData().subscribe(data => this.userData = data)
  }
  openCartDrawer() {
    this._cartService.openCart();
  }
}
