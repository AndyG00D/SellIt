import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { DataProductsService} from "./data-products.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductListPageComponent,
    DetailPageComponent,
    LoginPageComponent,
    ProductItemComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [DataProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
