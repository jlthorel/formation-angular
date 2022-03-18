import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket! : Product[] ;
  constructor(private customerServise: CustomerService) { }

  ngOnInit(): void {
    this.basket = this.customerServise.getBascket()
  }

}
