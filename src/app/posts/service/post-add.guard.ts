import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class PostAddGuard implements CanActivateChild {

  constructor(private loginService: LoginService) {

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAdmin;
  }
}
