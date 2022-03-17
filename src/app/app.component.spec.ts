import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@Component({
  selector: 'app-product',
  template: ''
})
class ProductFakeComponent {

}


@Component({
  selector: 'app-menu',
  template: ''
})
class MenuFakeComponent {

}


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [
        AppComponent,
        ProductFakeComponent,
        MenuFakeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myApp');
  });



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display a product', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(fixture.debugElement.query(By.directive(ProductFakeComponent))).toBeTruthy();
  });
});
