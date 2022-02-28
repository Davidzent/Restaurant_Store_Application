import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "../components/unique-pages/home/home.component";
import { CartComponent } from "../components/unique-pages/cart/cart.component";
import { ProductsComponent } from '../components/utils/customer/products-pages/products/products.component';
import { ProductComponent } from '../components/utils/customer/products-pages/product/product.component';
import { PurchasesComponent } from '../components/utils/customer/purchases-pages/purchases/purchases.component';

const appRoutes:Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  // {path:'login', component:HomeComponent},
  // {path:'register', component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'cart', component:CartComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
