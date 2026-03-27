import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartItems } from './cart-items/cart-items';
import { ICartItem } from '../core/models/cart.model';
import { CartService } from '../core/services/cart.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CartItems, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit{
  constructor(private _cartService: CartService) {};
  cartItems!: ICartItem[]
  openCart!: boolean;
  total = 0;
  ngOnInit(): void {
    this._cartService.initCartInfo();
    this._cartService.currentCartOpen.subscribe(open => this.openCart = open)
    this._cartService.currentCartInfo.subscribe(items => this.cartItems = items);
    this.calculateTotal();
    
  }

  storeCart() {
    const cartInfo = this._cartService.getCart();
    if (cartInfo)
      this._cartService.storeCart(cartInfo).subscribe();
  }

  calculateTotal() {
    for(let item of this.cartItems) {
      this.total += item.amount * item.price;
    }
  }
  totalChange(price: number) {
    this.total += price;
  }

  closeDrawer() {
    this._cartService.closeCart();
  }
}
