import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListPageComponent } from "./product-list-page/product-list-page.component";
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  { path: 'products', component: ProductListPageComponent },
  { path: 'products/:id', component: DetailPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
