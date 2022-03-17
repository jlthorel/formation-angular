import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

const welcomeMessage: string = 'myApp';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    {provide: 'welcomeMessage', useValue: welcomeMessage}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
