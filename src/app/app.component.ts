import { Component } from '@angular/core';
import { IdService } from './Service/id.service';
import { ServerHttpService } from './Service/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectEC';
  public roleId = 1;
  public token:any;
  public citys:any;
  public code:any;
  
  constructor(private getUser : ServerHttpService, private roleIdService : IdService) {
  }
  ngOnInit(): void {
    this.token =  localStorage.getItem('userToken');
    if (localStorage.getItem("role")) {
      this.roleId = Number(localStorage.getItem("role"));
    }

  }

  
}
