import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
    myForm: FormGroup;
    measurements = [
        {value: 'kg', viewValue: 'кілограм'},
        {value: 'g', viewValue: 'грам'},
        {value: 'l', viewValue: 'літр'},
        {value: 'ml', viewValue: 'мілілітр'}
      ];
    categories = [
        {value: 'veg', viewValue: 'овочі'},
        {value: 'fruit', viewValue: 'фрукти'},
        {value: 'milk', viewValue: 'молочні продукти'},
        {value: 'fish', viewValue: 'риба'},
        {value: 'else', viewValue: 'бакалія'},
        {value: 'chips', viewValue: 'снеки'}
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
        console.log(this.myForm.value)
    }
}