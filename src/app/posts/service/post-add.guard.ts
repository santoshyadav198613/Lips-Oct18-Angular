import { Injectable } from '@angular/core';
import { Resolve, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/service/login.service';
import { Iposts } from './Iposts';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostAddGuard implements CanActivateChild, Resolve<Iposts[]> {

  constructor(private loginService: LoginService, private postsService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Iposts[]> | Promise<Iposts[]> | Iposts[] {
    return this.postsService.getPosts();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAdmin;
  }

}
