import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterLink } from "@angular/router";
import { Product } from "./product/product";
import { ProductService } from '../core/services/product-service';
import { IProduct } from '../core/models/product.model';
import { map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  imports: [Product, AsyncPipe, ReactiveFormsModule], 
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  constructor(private _productsService: ProductService, private _cdr: ChangeDetectorRef) {}
  products!: Observable<IProduct[]>
  form = new FormGroup({
    gender: new FormControl(''),
    category: new FormControl(''),
    sortBy: new FormControl(''),
    maxPrice: new FormControl(''),
  })
  query: string = ''
  ngOnInit(): void {
    this.products = this._productsService.getProducts(this.query).pipe(map((res) => res.data))
  }
  filter() {
    const values = this.form.value;
    this.query = `?gender=${values.gender}&category=${values.category}&sortBy=${values.sortBy}&maxPrice=${values.maxPrice}`;
    this.products = this._productsService.getProducts(this.query).pipe(map((res) => res.data));
  }

}


