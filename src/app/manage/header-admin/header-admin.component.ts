import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['../../header/header.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userID');
    localStorage.removeItem('userMoney');
    localStorage.removeItem('role');
    sessionStorage.removeItem('idManage');
    sessionStorage.removeItem('bannerID');
    this.router.navigate(['./home'])
    .then(() => {
      window.location.reload();
    });
  }
}
