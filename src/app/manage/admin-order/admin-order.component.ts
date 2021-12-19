import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['../manage.component.scss']
})
export class AdminOrderComponent implements OnInit {

  public auctions:any;
  public bannerName:any;
  public bannerSize:any;
  public bannerImage:any;
  public bannerPrice:any;
  public webCategoryId = '1';
  public webCategorys:any;
  public bannerStatusId = '0';
  public userId:any;
  constructor(private handleWeb : ServerHttpService,private router : Router,private idManage : IdService) { }

  ngOnInit(): void {
   
  }
  select(event: any) {
    this.webCategoryId = event.target.value;
  }
  loadAll(){
    this.handleWeb.getAllOrder().subscribe((data) =>{
      this.auctions = data.allWinAuction;
    })
  }
  loadOrder(data:any){
    this.handleWeb.getOrderUserId(data).subscribe((data) =>{
      this.auctions = data.listWinAuction;
    })
  }
  loadAuction(data:any){
    this.handleWeb.getWillAuction(data).subscribe((data) =>{
      this.auctions = data.allAuction;
    })
  }



}
