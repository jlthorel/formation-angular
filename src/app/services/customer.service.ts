import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 basket : Product[] = [];

  constructor() { }

  addProduct(product : Product) :void {
    this.basket.push(product);

  }

  getTotal() : number {
    let total = 0;
    this.basket.forEach((oneItem) => {
      total += oneItem.price;
    })
    return total;

  }
}
