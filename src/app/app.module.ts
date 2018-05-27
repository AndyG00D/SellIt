import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { DataProductsService} from "./shared/services/data-products.service";
import { InfiniteScrollDirective } from './shared/directives/infinite-scroll.directive';
import { ScrollTopDirective } from './shared/directives/scroll-top.directive';
import { ButtonOnTopComponent } from './shared/components/button-on-top/button-on-top.component';
import { NotFoundComponent } from "./not-found/not-found.component";

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
    ScrollTopDirective,
    InfiniteScrollDirective,
    ButtonOnTopComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
