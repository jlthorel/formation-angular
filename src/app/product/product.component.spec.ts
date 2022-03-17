import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { Product } from '../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const expectedText = 'test - 5$';

    component.product = {
      title: 'test',
      price: 5
    } as Product;

    fixture.detectChanges();


    const text = fixture.debugElement.query(By.css('h3')).nativeElement.innerText;

    expect(text).toEqual(expectedText);
  });
});
