import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeOnboardingComponent
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
