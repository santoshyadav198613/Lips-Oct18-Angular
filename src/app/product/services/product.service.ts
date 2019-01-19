import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { IProduct } from './IProducts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  productList: IProduct[];  // productList is a varriabe
  constructor(private http: HttpClient) { }

  getProducts() {
    console.log(sessionStorage.getItem('userToken'));
    const tokenValue = sessionStorage.getItem('userToken');
    const token = new HttpHeaders().set("access-token", tokenValue);
    return this.http.get('/api/v1/product', { headers: token });
  }

  getProduct() {
    this.productList = [
      { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
      { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') },
      { id: 3, name: 'Food Oil', price: 140, mfd: new Date('20-Dec-2018') }
    ];

    // return this.productList;
    return of(this.productList);
  }


}
