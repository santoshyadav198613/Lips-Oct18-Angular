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

  user : User = {
    password : '',
    userName : ''
  };

  constructor(
    private loginService: LoginService,
    private routeService : Router
  ) { }

  ngOnInit() {
  }

  login() {
    if(this.loginService.login(this.user)){
      //redirect
      this.routeService.navigate(['/home']);
    }
  }
}
