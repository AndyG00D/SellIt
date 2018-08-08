import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {ProductListPageComponent} from './product-list-page/product-list-page.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DataProductResolver} from './core/product.resolve';
import {ProductAddPageComponent} from './product-add-page/product-add-page.component';
import {DynamicFormDemoPageComponent} from './dynamic-form-demo-page/dynamic-form-demo-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {GuestGuard} from './core/guards/guest.guard';
import {UserGuard} from './core/guards/user.guard';
import {ProductEditPageComponent} from './product-edit-page/product-edit-page.component';
import {CartPageComponent} from './cart-page/cart-page.component';

const routes: Routes = [
  {path: 'products', component: ProductListPageComponent},
  {path: 'products/add', component: ProductAddPageComponent, canActivate: [UserGuard]},
  {path: 'products/:id', component: ProductDetailPageComponent, resolve: {data: DataProductResolver}},
  {path: 'products/edit/:id', component: ProductEditPageComponent, resolve: {data: DataProductResolver}, canActivate: [UserGuard]},
  {path: 'profile', component: ProfilePageComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginPageComponent, canActivate: [GuestGuard]},
  {path: 'cart', component: CartPageComponent},
  {path: 'demo', component: DynamicFormDemoPageComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
