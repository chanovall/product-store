import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Product {
    "name": string;
    "amount": number;
    "measurement": string;
    "category": string;
}

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
    @Output() addProduct = new EventEmitter<Product>();
    myForm: FormGroup;
    measurements = [
        { value: 'kg', viewValue: 'кілограм' },
        { value: 'g', viewValue: 'грам' },
        { value: 'l', viewValue: 'літр' },
        { value: 'ml', viewValue: 'мілілітр' }
    ];
    categories = [
        { value: 'veg', viewValue: 'овочі' },
        { value: 'fruit', viewValue: 'фрукти' },
        { value: 'milk', viewValue: 'молочні продукти' },
        { value: 'fish', viewValue: 'риба' },
        { value: 'else', viewValue: 'бакалія' },
        { value: 'chips', viewValue: 'снеки' }
    ];
    constructor() {
        this.myForm = new FormGroup({
            "name": new FormControl("", Validators.required),
            "amount": new FormControl("", Validators.required),
            "measurement": new FormControl("", Validators.required),
            "category": new FormControl("", Validators.required),
        });

    }

    saveProduct() {
        if (this.myForm.valid) {
            this.addProduct.emit(this.myForm.value)
        };
    }
}