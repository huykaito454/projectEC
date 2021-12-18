import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { Interceptor } from './Auth/Interceptor';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RechargeComponent } from './recharge/recharge.component';
import { AuctionComponent } from './auction/auction.component';
import { CartComponent } from './cart/cart.component';
import { ProductUpcomingComponent } from './product-upcoming/product-upcoming.component';
import { ProductAllComponent } from './product/product-all/product-all.component';
import { ProductNewsComponent } from './product/product-news/product-news.component';
import { ProductEntaiComponent } from './product/product-entai/product-entai.component';
import { ProductEduComponent } from './product/product-edu/product-edu.component';
import { ManageComponent } from './manage/manage.component';
import { HeaderAdminComponent } from './manage/header-admin/header-admin.component';
import { CustomerComponent } from './manage/customer/customer.component';
import { WebComponent } from './manage/web/web.component';
import { BannerComponent } from './manage/banner/banner.component';
import { AdminAuctionComponent } from './manage/admin-auction/admin-auction.component';
import { AdminOrderComponent } from './manage/admin-order/admin-order.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ProductDetailsComponent,
    PaymentComponent,
    RechargeComponent,
    AuctionComponent,
    CartComponent,
    ProductUpcomingComponent,
    ProductAllComponent,
    ProductNewsComponent,
    ProductEntaiComponent,
    ProductEduComponent,
    ManageComponent,
    HeaderAdminComponent,
    CustomerComponent,
    WebComponent,
    BannerComponent,
    AdminAuctionComponent,
    AdminOrderComponent,

    
    
   
   
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,

    
  ],
  providers: [
    AuthGuard,
   {
     provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true  
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}
