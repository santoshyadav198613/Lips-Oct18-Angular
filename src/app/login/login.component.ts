import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './service/login.service';
import { User } from './service/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    password: '',
    email: ''
  };

  headers = ['Name', 'Age', 'Date of Birth', 'Email'];
  constructor(
    private loginService: LoginService,
    private routeService: Router
  ) { }

  ngOnInit() {
    // this.routeService.events.subscribe((event) => console.log(event));
  }

  login() {
    // if (this.loginService.login(this.user)) {
    //   // redirect
    //   this.routeService.navigate(['/employee']);
    // }

    this.loginService.login(this.user).subscribe((result: any) => {
      if (result.status === 'success') {
        this.loginService.isLoggedIn = true;
        sessionStorage.setItem('userToken',result.result);
        this.routeService.navigate(['/employee']);
      }
    }, (error) => console.log(error));
  }
}
