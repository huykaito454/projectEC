import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';
import { io } from 'socket.io-client';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public banners:any;
  public web:any;
  searchText:any;
  constructor(private dataService : ServerHttpService, private id : IdService, private socket : SocketService) {
  }
  
  ngOnInit(): void {
    this.dataService.getWebBanner().subscribe((data) => {
      this.banners = data.listBanner;
    })
    this.dataService.getWebId().subscribe((data) =>{
      this.web = data;

    })
  }
  loadID(data:any){
    this.id.loadAuction(data);
  }
  loadTable(data:any){
    // this.socket = io('http://localhost:8081',{ transports : ['websocket'] });
    this.socket.socket.emit("SendData",data);  
  }
}

