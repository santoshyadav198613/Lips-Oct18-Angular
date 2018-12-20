import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor() { }

  login(user: User) {
    if (user.password === 'Test' && user.userName === 'Test') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
