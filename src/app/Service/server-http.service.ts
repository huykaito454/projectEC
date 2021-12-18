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
  private endpoint = 'https://daugiabanner-server.herokuapp.com';
  constructor(private httpClient : HttpClient, private id : IdService) { }

  //--------------------------------------------------------------------------------------- Admin
  public getAllUser(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-user`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllBanner(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-banner`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllCategory(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-category`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllWeb(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-web`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllOrder(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-win-auction`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getOrderUserId(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-win-auction-by-user?userId=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getAllAuction(): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-all-auction`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getWillAuction(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/get-will-auction?status=${data}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public deleteUser(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/delete-user?id=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public deleteWeb(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/detele-web?id=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public deleteBanner(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/detele-banner?id=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public deleteAuction(data:any): Observable<any> {
    const url = `${this.endpoint}/admin/api/delete-auction?id=${data}`;
    return this.httpClient
      .delete<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public postUser(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/post-user`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public postAuction(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/post-auction`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public postWeb(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/post-web`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public postBanner(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/post-banner`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putUser(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/put-user`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putBanner(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/put-banner`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public putWeb(data : any): Observable<any> {
    const url = `${this.endpoint}/admin/api/put-web`;
    return this.httpClient
      .put<any>(url, data , this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  //--------------------------------------------------------------------------------------- Client 

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
  
  public getUser(): Observable<any> {
    const idUser = localStorage.getItem('userID');
    const url = `${this.endpoint}/api/get-user?id=${idUser}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getCart(): Observable<any> {
    const idUser = localStorage.getItem('userID');
    const url = `${this.endpoint}/api/get-your-cart?id=${idUser}`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getOrder(): Observable<any> {
    const idUser = localStorage.getItem('userID');
    const url = `${this.endpoint}/api/get-your-order?id=${idUser}`;
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