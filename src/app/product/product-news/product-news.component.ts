import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdService } from 'src/app/Service/id.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';

@Component({
  selector: 'app-product-news',
  templateUrl: '../product-all/product-all.component.html',
  styleUrls: ['../product.component.scss']
})
export class ProductNewsComponent implements OnInit {

  public products:any;
  public webID = [];
  constructor(private dataService : ServerHttpService, private router : Router, private id : IdService) { }

  ngOnInit(): void {
    this.dataService.getWebCategory().subscribe((data) => {
      this.products = data.listWeb;
      console.log(this.products);
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
  loadCategory(data:any){
    this.id.loadCatalog(data);
  }
}
