import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  public money= '';
  constructor(private router : Router , private rechargeUser : ServerHttpService) { 
  }
  ngOnInit(): void {
  }
  paypal(){
    render(
      { 
        id: "#myPaypalButton",
        currency: "USD",
        value: `${this.money}`,
        onApprove: (details) => {
          const userId = localStorage.getItem('userID');
          const newData = { userId : userId, money : this.money }
          this.rechargeUser.recharge(newData).subscribe((data)=>{
            if(data === 'Thanh cong'){
              alert("Nạp tiền thành công");
              this.router.navigate(['/account']);
            }
          })
        }
      }
    );
  }
  loadMoney(data:any){
    if(data !== ''){
      this.paypal();
    }
    else{
      alert('Vui lòng nhập số coin muốn nạp');
    }
  }
}
