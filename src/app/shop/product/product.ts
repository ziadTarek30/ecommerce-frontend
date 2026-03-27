import { Component, Input } from '@angular/core';
import { IProduct } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { ICartItem } from '../../core/models/cart.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() product!: IProduct
  constructor(private _cartService: CartService) {}
  addItemToCart(product: IProduct) {
    const cartItem: ICartItem = {slug: product.slug, name: product.name, imageUrl: product.imageUrl, price: product.price, amount: 1, quantity: product.quantity};
    this._cartService.addItemToCart(cartItem);
  }
  openModal = false;
  openProductModal() {
    this.openModal = true;
  }

  closeProductModal() {
    this.openModal = false;
  }
}
