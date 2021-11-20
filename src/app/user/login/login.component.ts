import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email = '';
  public password = '';
  isLoginError : boolean = false;
  constructor( private dataService : ServerHttpService, private router : Router ) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    const newData = {email : this.email, password:this.password };
    this.dataService.login(newData).subscribe((data) =>{
      if(data.errCode === 0){
        localStorage.setItem('userToken',data.access_token);
        localStorage.setItem('userID',data.user.id);
        localStorage.setItem('userMoney',data.user.money);
        this.router.navigate(['/']);
        
      }
      else {
        alert(data.message);
        this.router.navigate(['/login']);
      }
      
    },
    (errCode : HttpErrorResponse) => {
      this.isLoginError = true;
      console.log(errCode);
    });
  }
}
