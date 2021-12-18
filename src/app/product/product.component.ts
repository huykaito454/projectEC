import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products:any;
  public webID = [];

  searchText:any;
  constructor(private dataService : ServerHttpService, private router : Router, private id : IdService) { }

  ngOnInit(): void {
    this.dataService.getWeb().subscribe((data) => {
      this.products = data.listWeb;
    })
  }
  // wait(timer = 0){
  //   return new Promise(function(resolve,reject){
  //     setTimeout(resolve,timer);
  //   })
  // }
  loadBanner(data:any){
    this.id.loadBanner(data);
  }
  
}