import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { IProduct } from './IProducts';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck {

  @ViewChild('productName') productDiv : ElementRef;
  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;
  productList: IProduct[] = [];
  constructor() {
    console.log('Constructor is called');
  }

  ngOnInit() {
    console.log('OnInit is called');
    this.productList = [
      { id: 1, name: 'Toothbrush', price: 50, mfd: new Date('10-Oct-2018') },
      { id: 2, name: 'Hair Oil', price: 150, mfd: new Date('20-Oct-2018') }
    ];
    console.log(this.productListComponent);
    this.productListComponent.productList = this.productList; 
    
    console.log(this.productDiv);
    this.productDiv.nativeElement.innerText = 'Product Name';
  }

  ngDoCheck(): void {
    console.log('Do check is called');
  }

}
