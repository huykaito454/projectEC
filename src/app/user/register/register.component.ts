import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegisterError : boolean = false;
  public fullName = '';
  public email = '';
  public phone = '';
  public password = '';
  public passwordConfirm = '';
  constructor( private dataService : ServerHttpService, private router : Router ) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    const newData = { fullName : this.fullName, email: this.email,  phone : this.phone, password:this.password };
    console.log(newData);
    this.dataService.login(newData).subscribe((data) =>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/login']);
    },
    (err : HttpErrorResponse) => {
      this.isRegisterError = true;
    });
  }
}
