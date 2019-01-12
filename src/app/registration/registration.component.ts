import { Component, OnInit } from '@angular/core';
import { IUser } from './userregistartion.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: IUser = {
    city: '',
    dob: new Date(),
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
