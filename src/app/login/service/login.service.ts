import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  currentUser = '';
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post('/api/v1/user/login', user);

    //   if (user.password === 'Test' && user.userName === 'Test') {
    //     this.isLoggedIn = true;
    //   }
    //   if (user.password === 'Admin' && user.userName === 'Admin') {
    //     this.isLoggedIn = true;
    //     this.isAdmin = true;
    //   }
    //   this.currentUser = user.userName;
    //   return this.isLoggedIn;
  }
}
