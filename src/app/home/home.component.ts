import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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
