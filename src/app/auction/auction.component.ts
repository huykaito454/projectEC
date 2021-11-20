import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { ServerHttpService } from '../Service/server-http.service';
import { SocketService } from '../Service/socket.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit {
  public auction:any;
  public banner:any;
  public dayText:any;
  public hourText:any;
  public minuteText:any;
  public secondText:any;
  public interval:any;
  public price = '';
  public idAuction = '';
  public priceMinBid:any;
  public tables:any;
  public test :any;
  public tests :any;
  public topAuctionID:any;
  public idUser = Number(localStorage.getItem('userID'));
  constructor(private getAuction : ServerHttpService, private socket : SocketService, private router : Router) { 
    this.socket.socket;
  }
  ngOnInit(): void { 
    this.autoGet2();
    this.getAuction.getAuction().subscribe((data)=>{
      this.idAuction = data.auction.id;
      this.auction = data.auction;
      this.banner = data.auction.Banner;
      this.priceMinBid = data.auction.auctionMoney;
      this.tests = sessionStorage.getItem("test");
      this.tables = JSON.parse(this.tests);
      const utc2 = new Date(this.auction.date).toDateString(); // ngày tháng kết thúc 
      const dateEnd = `${utc2} ${this.auction.timeEnd} GMT+0700 (Indochina Time)`; 
      const endDate = new Date(dateEnd).getTime();
      this.autoGet();
      this.setInterval(endDate);
    })
    
  }  
  countdown(endDate:any){
    const startDate = new Date().getTime();
    let time = Math.floor((endDate - startDate ) / 1000); 
    if (time >= 0){
      let days = Math.floor(time / 86400);
      time = time % 86400;
      let hours = Math.floor(time / 3600);
      time = time % 3600;
      let minutes = Math.floor(time / 60);
      time = time % 60;
      let seconds = Math.floor(time);
      this.dayText = days;
      this.hourText = hours;
      this.minuteText = minutes;
      this.secondText = seconds;
    }
  else {
    const winUser = localStorage.getItem("userID");
    const topUser = this.tables[0].userId.toString();
    if(winUser === topUser ){
      const newData = {userId : this.tables[0].userId, auctionId : this.idAuction }
      console.log(newData)
      this.getAuction.winAuction(newData).subscribe((data) => {
        
      });
      alert("Chúc mừng bạn đã đấu giá thành công");
      clearInterval(this.interval);
      this.router.navigate(['/cart']);
    }
    else{
      alert("Đấu giá thất bại");
      clearInterval(this.interval);
      this.router.navigate(['/home']);
    }
  }
  
  }
  setInterval(endDate:any){
    this.interval = setInterval(() => {
      this.countdown(endDate);
    },1000)
  }
  autoGet(){
    this.socket.socket.on("SendToClient", (results: any) => {
      if(results.length !== 0){
        this.priceMinBid =  results[0].price;
        this.topAuctionID = results[0].userId;
      }
      this.tables = results;
      sessionStorage.setItem("test",JSON.stringify(results));
    })
    
  }
  autoGet2(){
    this.socket.socket.on("SendClient", (results: any) => {
      if(results.length !== 0){
        this.priceMinBid =  results[0].price;
        this.topAuctionID = results[0].userId;
      }
      this.tables = results;
      sessionStorage.setItem("test",JSON.stringify(results));
  })
  }

  bid(){
    const userMoney = localStorage.getItem('userMoney');
    if(this.price > (this.priceMinBid + (this.banner.price * 0.05) )&& Number(this.price) <= Number(userMoney)  ){
      const  idUser = localStorage.getItem("userID");
      this.socket.socket.emit("SendToServer",this.idAuction,this.price,idUser);     
    }
    else if (this.price < this.priceMinBid + (this.banner.price * 0.05)) {
      alert("Số tiền đặt giá phải lớn hơn giá tối thiểu + bước giá");
    }
    else if ( Number(this.price) > Number(userMoney)){
      alert("Số tiền trong tài khoản bạn không đủ");
    }
    }
}



