import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginComponent } from '../user/login/login.component';
import { IdService } from './id.service';
@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
  }
  private endpoint = 'http://localhost:8081';
  constructor(private httpClient : HttpClient, private id : IdService) { }

  public getWeb(): Observable<any> {
    const url = `${this.endpoint}/api/get-webs`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getWebId(): Observable<any> {
    const bannerID = sessionStorage.getItem('bannerID');
    const  url = `${this.endpoint}/api/get-web?webId=${bannerID}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getWebCategory(): Observable<any> {
    const Category = sessionStorage.getItem('Category');
    const  url = `${this.endpoint}/api/get-web-by-category?categoryId=${Category}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  private idUser = localStorage.getItem('userID');
  public getUser(): Observable<any> {
    const url = `${this.endpoint}/api/get-user?id=${this.idUser}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getCart(): Observable<any> {
    const url = `${this.endpoint}/api/get-your-cart?id=${this.idUser}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getOrder(): Observable<any> {
    const url = `${this.endpoint}/api/get-your-order?id=${this.idUser}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAuction(): Observable<any> {
    const idAuction = sessionStorage.getItem('auctionID');
    const  url = `${this.endpoint}/api/get-auction-by-banner?id=${idAuction}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getWebBanner(): Observable<any> { 
    const idBanner = sessionStorage.getItem('bannerID');
    const url = `${this.endpoint}/api/get-banner-by-webId?id=${idBanner}&&status=1`;  
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getWebBanner2(): Observable<any> { 
    const idBanner = sessionStorage.getItem('bannerID');
    const url = `${this.endpoint}/api/get-banner-by-webId?id=${idBanner}&&status=0`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public login(data : any): Observable<any> {
    const url = `${this.endpoint}/api/login`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public register(data : any): Observable<any> {
    const url = `${this.endpoint}/api/register`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public bid(data : any): Observable<any> {
    const url = `${this.endpoint}`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public winAuction(data : any): Observable<any> {
    const url = `${this.endpoint}/api/postWinAuction`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public checkout(data : any): Observable<any> {
    const url = `${this.endpoint}/api/checkout`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public recharge(data : any): Observable<any> {
    const url = `${this.endpoint}/api/recharge`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  // public postData(){
  //   const url = `${this.endpoint}`;
  //   return this.httpClient
  //     .post<any>(url,this.httpOptions)
  //     .pipe(catchError(this.handleError));
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}