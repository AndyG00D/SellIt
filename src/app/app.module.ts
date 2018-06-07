import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

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
import {DataProductsService} from "./shared/services/data-products.service";
import {AuthService} from "./shared/services/auth.service";
import {InfiniteScrollDirective} from './shared/directives/infinite-scroll.directive';
import {ScrollTopDirective} from './shared/directives/scroll-top.directive';
import {ButtonOnTopComponent} from './shared/components/button-on-top/button-on-top.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {SlideshowComponent} from './shared/components/slideshow/slideshow.component';
import {ChatComponent} from './shared/components/chat/chat.component';
import {SignUpFormComponent} from "./shared/components/sign-up-form/sign-up-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignInFormComponent} from "./shared/components/sign-in-form/sign-in-form.component";
import {FormControlErrorsComponent} from "./shared/components/form-control-errors/form-control-errors.component";
import {ProductFormComponent} from "./shared/components/product-form/product-form.component";
import {DynamicFormComponent} from './shared/forms/dynamic-form/dynamic-form.component';
import {TestFormPageComponent} from './test-form-page/test-form-page.component';
import {AuthInterceptor} from "./shared/services/auth.interceptor";
// import {AuthInterceptor} from "./shared/services/auth.interceptor";

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
    NotFoundComponent,
    SlideshowComponent,
    ChatComponent,
    SignUpFormComponent,
    SignInFormComponent,
    FormControlErrorsComponent,
    ProductFormComponent,
    DynamicFormComponent,
    TestFormPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DataProductsService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
