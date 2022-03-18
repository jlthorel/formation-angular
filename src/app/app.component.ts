import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './model/product';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit {

  total: number = 0;
  sortBy: string = "title";


  listProduct$!: Observable<Product[]>;

  constructor(
    @Inject('welcomeMessage') public WelcomeMessage: string,
    private customerServise: CustomerService,
    private productService: ProductService) {
   
  }

  ngOnInit(): void {
    this.listProduct$ = this.productService.getProducts();
    
  }


  onAddToBasket(data: any) {
    this.customerServise.addProduct(data.product);

    this.total = this.customerServise.getTotal();
    this.productService.decreaseStock(data.product)

  }


  onSort(property: string) {
    this.sortBy = property;
  }
}
