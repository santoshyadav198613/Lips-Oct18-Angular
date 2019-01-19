import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { IProduct } from './IProducts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  productList: IProduct[];  // productList is a varriabe
  constructor(private http: HttpClient) { }

  getProducts() {
    const header = new HttpHeaders().set("access-token", 
    sessionStorage.getItem('userToken'));
    return this.http.get('/api/v1/product', { headers: header });
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
