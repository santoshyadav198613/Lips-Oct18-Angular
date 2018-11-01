import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : IProduct[] = [];
  constructor() { }

  ngOnInit() {
  }

}
