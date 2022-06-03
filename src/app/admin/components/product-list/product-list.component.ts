import { Component, Input } from '@angular/core';
import { Product } from '../product-card/product-card.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
    @Input() productList: Product[] = [];
}