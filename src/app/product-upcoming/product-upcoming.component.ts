import { Component, OnInit } from '@angular/core';
import { IdService } from '../Service/id.service';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-product-upcoming',
  templateUrl: './product-upcoming.component.html',
  styleUrls: ['./product-upcoming.component.scss']
})
export class ProductUpcomingComponent implements OnInit {

  public banners:any;
  public web:any;
  searchText:any;
  constructor(private dataService : ServerHttpService, private id : IdService) {
  }
  
  ngOnInit(): void {
    this.dataService.getWebBanner2().subscribe((data) => {
      console.log(data);
      this.banners = data.listBanner;
    })
    this.dataService.getWebId().subscribe((data) =>{
      this.web = data;

    })
  }
  loadID(data:any){
    this.id.loadAuction(data);
  }
  

}
