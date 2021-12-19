import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from 'src/app/Service/server-http.service';

import { IdService } from 'src/app/Service/id.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['../manage.component.scss']
})

export class WebComponent implements OnInit {
  public webs:any;
  public webName:any;
  public webLink:any;
  public webImage:any;
  public webCategoryId = '1';
  public webCategorys:any;
  constructor(private handleWeb : ServerHttpService,private router : Router,private idManage : IdService) { }

  ngOnInit(): void {

    this.handleWeb.getAllWeb().subscribe((data) => {
      this.webs = data.allWeb;
    })
    this.handleWeb.getAllCategory().subscribe((data) => {
      this.webCategorys = data.allCategory;
    })
  }
  select(event: any) {
    this.webCategoryId = event.target.value;
  }
  postWeb(){
    const newData =  {name : this.webName, link:this.webLink,image:this.webImage,categoryId:this.webCategoryId};
    this.handleWeb.postWeb(newData).subscribe((data) => {
      if(data.message === 'Thanh cong'){
        alert('Thêm web thành công');
        this.idManage.loadIdManage(2);
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
  updateWeb(data:any){
    const newData = {id : data.id, name : data.name,link:data.link,image:data.image,categoryId:data.categoryId} 
    this.handleWeb.putWeb(newData).subscribe((data) => {
      if(data.message === 'Thanh cong'){
        alert('Sửa web thành công');
        this.idManage.loadIdManage(2);
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
  deleteWeb(data:any){
    this.handleWeb.deleteWeb(data.id).subscribe((data) => {
     
      if(data.message === 'Thanh cong'){
        alert('Xóa web thành công');
        this.idManage.loadIdManage(2);
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
