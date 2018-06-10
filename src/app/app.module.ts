import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {AddProductPageComponent} from './add-product-page/add-product-page.component';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProductItemComponent} from './shared/components/product-item/product-item.component';
import {DataProductsService} from "./core/services/data-products.service";
import {InfiniteScrollDirective} from './shared/directives/infinite-scroll.directive';
import {ScrollTopDirective} from './shared/directives/scroll-top.directive';
import {ButtonOnTopComponent} from './shared/components/button-on-top/button-on-top.component';
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {SlideshowComponent} from './shared/components/slideshow/slideshow.component';
import {ChatComponent} from './shared/components/chat/chat.component';
import {SignUpFormComponent} from "./shared/components/sign-up-form/sign-up-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignInFormComponent} from "./shared/components/sign-in-form/sign-in-form.component";
import {ProductFormComponent} from "./shared/components/product-form/product-form.component";
import {DynamicFormDemoPageComponent} from './dynamic-form-demo-page/dynamic-form-demo-page.component';
import {ComponentLoaderService} from "./core/services/component-loader.service";
import {DynamicFormModule} from "./dynamic-form/dynamic-form.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddProductPageComponent,
    ProductListPageComponent,
    DetailPageComponent,
    LoginPageComponent,
    AddProductPageComponent,
    ProductItemComponent,
    ScrollTopDirective,
    InfiniteScrollDirective,
    ButtonOnTopComponent,
    NotFoundPageComponent,
    SlideshowComponent,
    ChatComponent,
    SignUpFormComponent,
    SignInFormComponent,
    ProductFormComponent,
    DynamicFormDemoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  providers: [DataProductsService, ComponentLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
