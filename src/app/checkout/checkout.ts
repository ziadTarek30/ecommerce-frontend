import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ITokenInfo } from '../core/models/auth.model';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../core/services/order-service';
import { IOrder } from '../core/models/order.model';
import { CartService } from '../core/services/cart.service';
import { ICartItem } from '../core/models/cart.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit {
  userData!: ITokenInfo | null
  form = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })
  cartItems!: ICartItem[]
  constructor (private _authService: AuthService, private _cartService: CartService, private _orderService: OrderService, private _cdr: ChangeDetectorRef, private _router: Router) {}
  ngOnInit(): void {
    this._authService.getAuthData().subscribe(data => this.userData = data);
    const cart = this._cartService.getCart()
    
    if (cart) {
      this.cartItems = cart.cartItems
    }

  }
  placeOrder() {
    const order: IOrder = {...this.form.value as IOrder, totalPrice: 0, cartItems: this.cartItems, user: this.userData!._id}
    this._orderService.createOrder(order).subscribe();
    this._router.navigate(['/account'])
  }
}
