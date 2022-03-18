import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';

describe('ProductComponent', () => {
  let component: ProductComponent;

  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      declarations: [
        ProductComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = {
      title: 'test',
      price: 5,
      stock: 15,
    } as Product;
  });

  it('should create', () => {
    component.product = {
      title: 'test',
      price: 5,
      stock: 15,
    } as Product;

    expect(component).toBeTruthy();
  });

  it('should have H3 directive', () => {
    const expectedText = 'TEST - €5.00';

    component.product = {
      title: 'test',
      price: 5,
      stock: 15,
    } as Product;

    fixture.detectChanges();


    const text = fixture.debugElement.query(By.css('h3')).nativeElement.innerText;

    expect(text).toEqual(expectedText);
  });
});
function localeFr(localeFr: any) {
  throw new Error('Function not implemented.');
}

