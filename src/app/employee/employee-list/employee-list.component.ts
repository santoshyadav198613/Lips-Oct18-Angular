import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employeeList: IEmployee;
  @Input() title: string;
  @Output() sendToParent: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  constructor() { }

  ngOnInit() {
  }

  selectEmployee(employee: IEmployee) {
    console.log(employee);
    this.sendToParent.emit(employee);
  }

}
