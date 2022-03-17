import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct: Product[] = [];

  constructor() {

    this.listProduct = [
      {
        title: 'Men SWeatshirt',
        price: 39,
        description: 'C0D1NG_TH3_WORLD BIO',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png',
        stock: 5,
      },
      {
        title: 'Men T-Shirt',
        price: 19,
        description: 'bio T-Shirt with CREWNECk',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png',
        stock: 15,
      },
      {
        title: 'T-Shirt women',
        price: 30,
        description: 'bio T-Shirt with CREWNECk',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
        stock: 7,
      },
      {
        title: 'Tote bag',
        price: 12,
        description: 'C0D1NG_TH3_WORDL, Bio tote Bag',
        photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png',
        stock: 3,
      },
    ];


  }

  getProducts(): Product[] {
    return this.listProduct;
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1
  }

  decreaseStock(indexProduct: number): void {
    if (this.listProduct[indexProduct].stock > 0) {
      this.listProduct[indexProduct].stock--;
    }
  }
}
