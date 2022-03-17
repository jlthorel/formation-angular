import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product! : Product
  @Input() indexProduct! : number
  @Output() addToBasket : EventEmitter<any> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToBasketFct() : void {
    this.addToBasket.emit({"product": this.product, "index" : this.indexProduct})
  }
}
