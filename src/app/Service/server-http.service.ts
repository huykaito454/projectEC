import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
  }
  private endpoint = 'http://localhost:1234';
  constructor(private httpClient : HttpClient) { }

  public getProduct(): Observable<any> {
    const url = `${this.endpoint}/product`;
    return this.httpClient
      .get<any>(url,this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public postUser(data : any): Observable<any> {
    const url = `${this.endpoint}/users`;
    return this.httpClient
      .post<any>(url, data , this.httpOptions)
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