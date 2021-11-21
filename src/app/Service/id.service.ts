import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdService {
  private webID = new BehaviorSubject('');
  currentID = this.webID.asObservable();
  constructor() { }
  loadBanner(data:any){
    this.webID.next(data.id);
    this.currentID.subscribe((data)=>{
      sessionStorage.setItem('bannerID',data);
    })
  }
  loadCatalog(data:any){
    this.webID.next(data);
    this.currentID.subscribe((data)=>{
      sessionStorage.setItem('Category',data);
    })
  }
  loadAuction(data:any){
    this.webID.next(data.Auctions.id);
    this.currentID.subscribe((data)=>{
      sessionStorage.setItem('auctionID',data);
    })
  }
  loadAuctionCart(data:any){
    this.webID.next(data.auctionId);
    this.currentID.subscribe((data)=>{
      sessionStorage.setItem('cartAuctionID',data);
    })
  }
}
