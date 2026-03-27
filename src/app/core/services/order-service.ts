import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _httpClient: HttpClient) {}

  createOrder(order: IOrder) {
    return this._httpClient.post('http://localhost:3000/api/v1/orders', order);
  }
  getOrdersById(id: string) {
    return this._httpClient.get<{message: string, data: IOrder[]}>('http://localhost:3000/api/v1/orders/' + id);
  }
}
