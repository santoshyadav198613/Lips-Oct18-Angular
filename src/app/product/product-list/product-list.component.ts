import { Component, OnInit, Output, Self, EventEmitter } from '@angular/core';
import { IProduct } from '../services/IProducts';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent implements OnInit {

  productCount = 0;
  productList: IProduct[] = [];

  @Output() deleteProduct = new EventEmitter<string>();

  ngOnInit() {
  }

  delete(productId) {
    this.deleteProduct.emit(productId);
  }

}
