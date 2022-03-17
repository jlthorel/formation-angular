import { Component } from '@angular/core';

import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'myApp';
  total: number = 0;
  

  listProduct: Product[] = [];

  constructor() {
    this.listProduct = [
      {
        title: 'Men SWeatshirt',
        price: 39,
        description: 'C0D1NG_TH3_WORLD BIO',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
        stock:5,
      },
      {
        title: 'Men T-Shirt',
        price: 19,
        description: 'bio T-Shirt with CREWNECk',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
        stock:15,
      },
      {
        title: 'T-Shirt women',
        price: 30,
        description: 'bio T-Shirt with CREWNECk',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
        stock:7,
      },
      {
        title: 'Tote bag',
        price: 12,
        description: 'C0D1NG_TH3_WORDL, Bio tote Bag',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
        stock:3,
      },
    ];
  }

  onAddToBasket(data : any) {
    this.total = this.total + data.product.price;
    if (this.listProduct[data.index].stock > 0 ) {
      this.listProduct[data.index].stock--;
    }
    
  }
}
