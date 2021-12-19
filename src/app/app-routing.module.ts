import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './Auth/auth.guard';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AuctionComponent } from './auction/auction.component';
import { CartComponent } from './cart/cart.component';
import { ProductUpcomingComponent } from './product-upcoming/product-upcoming.component';
import { ProductNewsComponent } from './product/product-news/product-news.component';
import { ProductAllComponent } from './product/product-all/product-all.component';
import { ProductEntaiComponent } from './product/product-entai/product-entai.component';
import { ProductEduComponent } from './product/product-edu/product-edu.component';
import { ManageComponent } from './manage/manage.component';
import { Auth2Guard } from './Auth/auth2.guard';

import { CustomerComponent } from './manage/customer/customer.component';
import { WebComponent } from './manage/web/web.component';



const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'home',component : HomeComponent },
  // {path : 'product',component : ProductComponent},
  {path : 'product-details',component : ProductDetailsComponent, canActivate:[AuthGuard] },
  {path : 'account',component : AccountComponent, canActivate:[AuthGuard] },
  {path : 'recharge',component : RechargeComponent, canActivate:[AuthGuard] },
  {path : 'auction',component : AuctionComponent, canActivate:[AuthGuard] },
  {path : 'cart',component : CartComponent, canActivate:[AuthGuard] },
  {path : 'product-upcoming',component : ProductUpcomingComponent, canActivate:[AuthGuard] },
  {
    path : 'register',component : UserComponent,
    children : [{path: '',component : RegisterComponent}] 
  },
  {
    path : 'login',component : UserComponent,
    children : [{path: '',component : LoginComponent}] 
  },
  {
    path : '', redirectTo:'/login',pathMatch: 'full'
  },
  {
    path : 'product-news',component : ProductComponent,
    children : [{path: '',component : ProductNewsComponent}] 
  },
  {
    path : 'product',component : ProductComponent,
    children : [{path: '',component : ProductAllComponent ,canActivate:[AuthGuard]}] 
  },
  {
    path : 'product-entertainment',component : ProductComponent,
    children : [{path: '',component :ProductEntaiComponent}] 
  },
  {
    path : 'product-education',component : ProductComponent,
    children : [{path: '',component : ProductEduComponent}] 
  },
  {path : '',component : ManageComponent,outlet:'admin'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }