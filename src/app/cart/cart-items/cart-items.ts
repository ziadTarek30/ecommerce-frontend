import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from '../../core/models/cart.model';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-items',
  imports: [],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.css',
})
export class CartItems {
  @Input() cartItem!: ICartItem;
  constructor(private _cartService: CartService) {}
  removeItem(slug: string) {
    this._cartService.removeItem(slug);
    this.totalChange.emit(-this.cartItem.price * this.cartItem.amount);
  }
  @Output() totalChange = new EventEmitter<number>();
  increaseAmount() {
    this.cartItem.amount++;
    if ((this.cartItem.quantity - this.cartItem.amount) < 0)
      this.cartItem.amount--;
    else 
      this.totalChange.emit(this.cartItem.price);
  }
  decreaseAmount() {
    this.cartItem.amount--;
    if (this.cartItem.amount < 1)
      this.cartItem.amount = 1;
    else
      this.totalChange.emit(-this.cartItem.price);
  }
}
