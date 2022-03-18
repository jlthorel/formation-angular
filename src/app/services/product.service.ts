import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  listProduct: Product[] = [];
  baseUrl : string = `http://13.37.46.78:8080/rest`; 

  constructor(private httpClient : HttpClient) {
  }

  getProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`)
    .pipe(
      map((data: Product[])  => {
        return data;
      })
    );
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1
  }

  
  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }
  
  decreaseStock(product: Product): void {
    product.stock --;
  }

 
}
