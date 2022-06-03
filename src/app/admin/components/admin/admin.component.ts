import { Component } from '@angular/core';
import { Product } from '../product-card/product-card.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  productList: Product[] = [];

  onAddProduct(item:Product) {
    this.productList.push(item)
  }
}