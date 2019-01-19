import { Injectable } from '@angular/core';
import { Router, Route, UrlSegment } from '@angular/router';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private loginService: LoginService,
    private router: Router) {

  }

  validateUser() {
    const token = sessionStorage.getItem('userToken');
    if (this.loginService.isLoggedIn && token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateUser();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateUser();
  }
}
