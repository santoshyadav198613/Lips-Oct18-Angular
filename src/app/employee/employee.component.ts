import { Component, OnInit } from '@angular/core';

import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  name: string = 'Test';

  hidden: boolean = false;

  employee: IEmployee = {
    id: 1, address: 'Pune', name: 'Sachin',
    dob: new Date("20-dec-1989"), salary: 1000
  };

  empList: IEmployee[] = [
    {
      id: 1, address: 'Pune', name: 'Sachin',
      dob: new Date("20-dec-2005"), salary: 2000
    },
    {
      id: 2, address: 'Pune', name: 'Amit',
      dob: new Date("20-dec-1986"), salary: 4000
    },
    {
      id: 3, address: 'Pune', name: 'Virat',
      dob: new Date("20-dec-1998"), salary: 5000
    }
  ];

  constructor() { }

  toggle() {
    this.hidden = !this.hidden;
  }

  addEmployee() {
    this.empList = [{ id: 4, name: 'Amit', address: 'Mumbai',
    dob: new Date("20-dec-2002"), salary: 6000 }];
  }
  receiveFromChild(employee: IEmployee) {
    console.log(employee);
    this.employee = employee;
  }
}
