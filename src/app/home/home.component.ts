import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products:any;
  constructor( protected serverHttp :ServerHttpService ) { }

  ngOnInit(): void {
    // this.serverHttp.getProduct().subscribe((data) => {
    //   this.products = data;
    // })
  }

}
