import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";

const routes: Routes = [
  {path:'about', component:AboutPageComponent},
  {path:'product', component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
