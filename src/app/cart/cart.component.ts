import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public carts:any;
  public yourBanner:any;
  public checkCart = 1;
  constructor( private getCart : ServerHttpService, private  router :Router) { }

  ngOnInit(): void {
    this.getCart.getCart().subscribe((data) => {
      this.carts = data.cart;
    })
  }
  checkout(data:any){
    this.checkCart = 2;
    const newData = {userId : data.userId, auctionId : data.auctionId, yourBanner : data.yourBanner};
    if(data.yourBanner !== 0){
      this.getCart.checkout(newData).subscribe((data) =>{
        console.log(data);
        if(data.message == 'Thanh cong'){
          alert("Thành công");
          this.router.navigate(['/account']);
        }
        else{
          alert(data.message);
          this.checkCart = 1
        }
      })
    }
    else{
      alert("Vui lòng nhập URL image");
      this.checkCart = 1
    }
  }
  
}
