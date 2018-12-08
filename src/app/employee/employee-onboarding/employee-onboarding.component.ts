import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onboardingForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      address : this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('')
      })
    }
    );
  }



}
