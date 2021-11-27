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
  postBanner(){
    const newData =  {name : this.bannerName, size:this.bannerSize,image:this.bannerImage,webId:this.webCategoryId,price:this.bannerPrice,status:this.bannerStatusId,time:'0'};
    console.log(newData);
    this.handleWeb.postBanner(newData).subscribe((data) => {
      if(data.message === 'Thanh cong'){
        alert('Thêm banner thành công');
        this.idManage.loadIdManage(3);
        this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        })
      }
      else{
        alert(data.message);
      }
    })
  }
  updateBanner(data:any){
    const newData = {id : data.id, name : data.name, size:data.size,price:data.price, image:data.image,time :data.time,status :data.status, webId:data.webId} 
    this.handleWeb.putBanner(newData).subscribe((data) => {
      if(data.message === 'Thanh cong'){
        alert('Sửa web thành công');
        this.idManage.loadIdManage(3);
        this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
      }
      else{
        alert(data.message);
      }
    })
  }
  deleteBanner(data:any){
    this.handleWeb.deleteBanner(data.id).subscribe((data) => {
      console.log(data);
      if(data.message === 'Thanh cong'){
        alert('Xóa banner thành công');
        this.idManage.loadIdManage(3);
        this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
      }
      else{
        alert(data.message);
      }
    })

  }

}
