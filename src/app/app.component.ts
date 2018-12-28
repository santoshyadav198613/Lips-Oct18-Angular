import { Component } from '@angular/core';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World
  // From Angualr </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagementApp-V7';

  role = 'Super-User';

  constructor(public loginService: LoginService) {

  }

}
