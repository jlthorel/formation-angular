import { Inject } from '@angular/core';
import { Component } from '@angular/core';

import { Product } from './model/product';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  total: number = 0;
  sortBy: string = "title";
  

  listProduct: Product[] = [];

  constructor(
    @Inject('welcomeMessage') public WelcomeMessage : string,
    private customerServise : CustomerService,
    private productService : ProductService ) {
    this.listProduct = productService.getProducts();
  }

  onAddToBasket(data : any) {
    this.customerServise.addProduct(data.product);

    this.total = this.customerServise.getTotal();
    this.productService.decreaseStock(data.index)
    
  }

      
  onSort(property: string) {
    this.sortBy = property;
  }
}
