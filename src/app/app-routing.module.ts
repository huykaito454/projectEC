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


const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'home',component : HomeComponent },
  {path : 'product',component : ProductComponent},
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }