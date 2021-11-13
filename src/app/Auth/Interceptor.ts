import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private router : Router ){}
    intercept(
        request : HttpRequest<any>,
        next : HttpHandler
    ):Observable<HttpEvent<any>>{
        if(localStorage.getItem('access-token') != null){
            // const token = localStorage.getItem('access-token');
            let token = ''
            const headers = new HttpHeaders()
            .set('access-token',token)
            .set('Authorization', 'Bearer' + token); 
            const AuthRequest = request.clone({headers:headers});
            return next.handle(AuthRequest);
        } else{
            return next.handle(request);
        }
        
    }
}