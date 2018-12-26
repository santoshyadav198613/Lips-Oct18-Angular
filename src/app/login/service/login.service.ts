import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  currentUser : string = '';
  constructor() { }

  login(user: User) {
    if (user.password === 'Test' && user.userName === 'Test') {
      this.isLoggedIn = true;
    }
    if (user.password === 'Admin' && user.userName === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    this.currentUser = user.userName;
    return this.isLoggedIn;
  }
}
