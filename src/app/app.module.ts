import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { SortproductPipe } from './pipe/sortproduct.pipe';

registerLocaleData(localeFr);
const welcomeMessage: string = 'myApp';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortproductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    {provide: 'welcomeMessage', useValue: welcomeMessage},
    {provide: LOCALE_ID, useValue: navigator.language}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
