import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerHttpService } from '../Service/server-http.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  public roleId:any;
  constructor(private router : Router, private getRole : ServerHttpService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      this.getRole.getUser().subscribe((data) =>{
        this.roleId = data.user.roleId;
        console.log(this.roleId);
      })
    if(this.roleId === 2 ){
      return true;
    }
    else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
