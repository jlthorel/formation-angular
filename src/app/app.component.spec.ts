import { Component, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SortproductPipe } from './pipe/sortproduct.pipe';
import { Product } from './model/product';

@Component({
  selector: 'app-menu',
  template: ''
})
class MenuFakeComponent {

}

@Component({
  selector: 'app-product',
  template: ''
})
class ProductFakeComponent {
  @Input()
  indexProduct!: number;
  @Input()
  product!: Product;
}

const welcomeMessageStr = 'myApp';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [
        AppComponent,
        ProductFakeComponent,
        MenuFakeComponent,
        SortproductPipe
      ],
      providers: [
        {provide: 'welcomeMessage', useValue: 'welcomeMessageStr'}
        ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
   
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'myApp'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('myApp');
  // });



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display a product', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(ProductFakeComponent))).toBeTruthy();
  });
});
