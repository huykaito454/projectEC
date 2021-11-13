import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Service/server-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products:any;

  constructor(private dataService : ServerHttpService) { }

  ngOnInit(): void {
    this.dataService.getProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  }

}