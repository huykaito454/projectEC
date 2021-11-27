import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public user:any;
  public orders:any;
  constructor( private router : Router, private getUser : ServerHttpService) { }
  
  ngOnInit(): void {
    this.getUser.getUser().subscribe((data) => {     
      this.user = data.user;
      localStorage.setItem('userMoney',this.user.money);
    })
    this.getUser.getOrder().subscribe((data) =>{
      this.orders = data.order;
    })
  }
  logOut(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('userMoney');
    localStorage.removeItem('role');
    sessionStorage.removeItem('bannerID');
    this.router.navigate(['./home']);
  }
}
