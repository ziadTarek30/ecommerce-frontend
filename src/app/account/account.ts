import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICartInfo, ICartItem } from '../core/models/cart.model';
import { CartService } from '../core/services/cart.service';
import { OrderService } from '../core/services/order-service';
import { ITokenInfo } from '../core/models/auth.model';
import { AuthService } from '../core/services/auth.service';
import { IOrder } from '../core/models/order.model';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  constructor(private _orderService: OrderService, private _authService: AuthService, private _cdr: ChangeDetectorRef) {}
  userData!: ITokenInfo | null
  orders!: IOrder[]
  ngOnInit(): void {
    this._authService.getAuthData().subscribe(data => {
      this.userData = data
      this._cdr.detectChanges()
      console.log(this.userData)
    })
    this._orderService.getOrdersById(this.userData!._id).subscribe(data =>{
     this.orders = data.data 
     this._cdr.detectChanges()
     console.log(this.orders);
    } );
  }

}
