import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 basket : Product[] = [];
 baseUrl : string = `http://13.37.46.78:8080/rest`; 

  constructor(private httpClient : HttpClient) { }

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

  getBascket(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/basket`);
  }
}
