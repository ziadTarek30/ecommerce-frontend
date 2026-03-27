import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/product.model';
import { ICartInfo, ICartItem } from '../models/cart.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartInfo = new BehaviorSubject<ICartItem[] | []>([]);
  currentCartInfo = this.cartInfo.asObservable();
  private cartOpen = new BehaviorSubject<boolean>(false);
  currentCartOpen = this.cartOpen.asObservable();

  constructor(private _httpClient: HttpClient) {}
  storeCart(cart: ICartInfo) {
    return this._httpClient.post('http://localhost:3000/api/v1/users/cart', cart);
  }

  getCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartItems: ICartItem[] = JSON.parse(cart);
      const cartInfo: ICartInfo = {cartItems, priceChanged: false};
      return cartInfo
    }
    return null;
  }

  openCart() {
    this.cartOpen.next(true);
  }
  closeCart() {
    this.cartOpen.next(false);
  }
  initCartInfo() {
    const cartItemsString = localStorage.getItem('cart');
    if (cartItemsString)
      this.cartInfo.next(JSON.parse(cartItemsString));
    else
      this.cartInfo.next([]);
  }
  cartInit() {
    // const 
  }
  private cartKey = 'cart';
  getCartById(id: string) {
    return this._httpClient.get("http://localhost:3000/api/cart/" + id);
  }
  addItemToCart(cartItem: ICartItem) {
    const cart = localStorage.getItem(this.cartKey);
    if (!cart) {
      const newCart = [cartItem];
      localStorage.setItem(this.cartKey, JSON.stringify(newCart));
    }
    else {
      const cartString = localStorage.getItem(this.cartKey);
      const cart: Array<ICartItem> = JSON.parse(cartString!);
      const itemExists = cart.find((item => item.slug === cartItem.slug));
      if (itemExists) {
        itemExists.amount++;
      }
      else {
        cart.push(cartItem);
      }
      this.cartInfo.next(cart)
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
  }

  removeItem(slug: string) {
    let cart = localStorage.getItem(this.cartKey);
    let parsedCart: ICartItem[] = JSON.parse(cart!);
    parsedCart = parsedCart.filter(item => item.slug !== slug);
    this.cartInfo.next(parsedCart);
    localStorage.setItem(this.cartKey, JSON.stringify(parsedCart));
  }
}
