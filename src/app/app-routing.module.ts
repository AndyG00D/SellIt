import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductListPageComponent } from "./product-list-page/product-list-page.component";
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import {DataProductResolver} from "./core/data-products.resolve";
import {AddProductPageComponent} from "./add-product-page/add-product-page.component";
import {DynamicFormDemoPageComponent} from "./dynamic-form-demo-page/dynamic-form-demo-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent },
  { path: 'products/add', component: AddProductPageComponent},
  { path: 'products/:id', component: DetailPageComponent, resolve: { data: DataProductResolver} },
  { path: 'profile', component:ProfilePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'demo', component: DynamicFormDemoPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
