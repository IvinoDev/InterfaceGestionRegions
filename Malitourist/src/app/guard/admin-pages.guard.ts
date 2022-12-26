import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPagesGuard implements CanActivate {
  user:any;
  ShowAdminPages:any;

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if (localStorage["user"]) {
        this.user = JSON.parse(localStorage["user"]);
        this.ShowAdminPages = this.user.roles.includes["ROLE_ADMIN"];

    }

      if (this.ShowAdminPages) {
        return true;
      } else {
        return this.router.navigate(["home"]);
      }
  }
  
}
