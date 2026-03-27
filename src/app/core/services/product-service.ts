import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductsRes } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {};
  private apiUrl = 'http://localhost:3000/api/v1/products';
  getProducts(query?: string) {
    return this._httpClient.get<IProductsRes>(this.apiUrl + (query ? query: ''));
  }
}
