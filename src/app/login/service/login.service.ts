import { Injectable, Inject } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from '../../custom';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;
  currentUser = '';
  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) {
    console.log(this.appConfig);
  }

  login(user: User) {
    return this.http.post(this.appConfig.apiEndPoint + '/api/v1/user/login', user);

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
