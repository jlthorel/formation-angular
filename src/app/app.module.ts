import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { SortproductPipe } from './pipe/sortproduct.pipe';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';

registerLocaleData(localeFr);
const welcomeMessage: string = 'myApp';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortproductPipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    {provide: 'welcomeMessage', useValue: welcomeMessage},
    {provide: LOCALE_ID, useValue: navigator.language}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
