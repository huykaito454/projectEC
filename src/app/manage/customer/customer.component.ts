import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['../manage.component.scss']
})
export class CustomerComponent implements OnInit {

  public users:any;
  public userName:any;
  public userEmail:any;
  public userPassword:any;
  public userPhone:any;
  public userRoleId = '2';
  public userRoles = [
    { name: "Admin", value: 2 },
    { name: "User", value: 1 }
  ]
  constructor(private handleUser : ServerHttpService, private router : Router,private idManage : IdService) { }

  ngOnInit(): void {
    this.handleUser.getAllUser().subscribe((data) => {
      this.users = data.allUser;
    
    })
  }
  select(event: any) {
    this.userRoleId = event.target.value;
  }
  postUser(){
    const newData =  {fullName : this.userName,email:this.userEmail,password :this.userPassword,phone : this.userPhone,roleId : this.userRoleId};
    console.log(newData);
    this.handleUser.postUser(newData).subscribe((data) => {
      console.log(data);
      if(data.errCode == 0){
        alert('Thêm tài khoản thành công');
        this.idManage.loadIdManage(1);
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
  updateUser(data:any){
    const newData = {id : data.id, fullName : data.fullName,email:data.email,money:data.money,roleId:data.roleId, password:data.password } 
    this.handleUser.putUser(newData).subscribe((data) => {
      if(data.errCode === 0){
        alert('Sửa tài khoản thành công');
        this.idManage.loadIdManage(1);
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
  deleteUser(data:any){
    this.handleUser.deleteUser(data.id).subscribe((data) => {
     
      if(data.message === 'Thanh cong'){
        alert('Xóa tài khoản thành công');
        this.idManage.loadIdManage(1);
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
