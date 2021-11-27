import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['../manage.component.scss']
})
export class BannerComponent implements OnInit {

  public banners:any;
  public bannerName:any;
  public bannerSize:any;
  public bannerImage:any;
  public bannerPrice:any;
  public webCategoryId = '1';
  public webCategorys:any;
  public bannerStatusId = '0';
  constructor(private handleWeb : ServerHttpService,private router : Router,private idManage : IdService) { }

  ngOnInit(): void {
    this.handleWeb.getAllBanner().subscribe((data) => {
       this.banners = data.allBanner;
    })
    this.handleWeb.getAllWeb().subscribe((data)=>{
      this.webCategorys = data.allWeb;
    })
  }
  select(event: any) {
    this.webCategoryId = event.target.value;
  }
  postBanner(){
    const newData =  {name : this.bannerName, size:this.bannerSize,image:this.bannerImage,webId:this.webCategoryId,price:this.bannerPrice,status:this.bannerStatusId,time:'0'};

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
