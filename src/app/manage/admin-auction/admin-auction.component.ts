import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-admin-auction',
  templateUrl: './admin-auction.component.html',
  styleUrls: ['../manage.component.scss']
})
export class AdminAuctionComponent implements OnInit {

  public auctions:any;
  public idBanner:any;
  public timeStart:any;
  public timeEnd:any;
  public webCategoryId = '1';
  public webCategorys:any;
  public bannerStatusId = '0';
  constructor(private handleWeb : ServerHttpService,private router : Router,private idManage : IdService) { }

  ngOnInit(): void {
   
  }
  select(event: any) {
    this.webCategoryId = event.target.value;
  }
  loadAll(){
    this.handleWeb.getAllAuction().subscribe((data) =>{
      this.auctions = data.allAuction;
      console.log(data.allAuction);
      const date = new Date (data.allAuction[0].timeStart)
      console.log(date);
    })
  }
  loadAuction(data:any){
    this.handleWeb.getWillAuction(data).subscribe((data) =>{
      this.auctions = data.allAuction;
    })
  }
  postAuction(){
    const start = new Date(this.timeStart).getTime();
    const end = new Date(this.timeEnd).getTime();
    const newData =  {bannerId : this.idBanner, timeStart:start,timeEnd:end};
    this.handleWeb.postAuction(newData).subscribe((data) => {
      if(data.message === 'Thanh cong'){
        alert('Thêm đấu giá thành công');
        this.idManage.loadIdManage(4);
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
    this.handleWeb.deleteAuction(data).subscribe((data2) => {
      if(data2.message == 'Thanh cong'){  
        alert('Xóa đấu giá thành công');
        this.idManage.loadIdManage(4);
        this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
      }
      else{
        alert(data2.message);
      }
    })

  }

}
