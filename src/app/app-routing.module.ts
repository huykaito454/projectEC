import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './Auth/auth.guard';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'home',component : HomeComponent},
  {path : 'product',component : ProductComponent},
  {path : 'account',component : AccountComponent, canActivate:[AuthGuard] },
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