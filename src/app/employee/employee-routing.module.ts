import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AuthGuard } from '../guards/auth.guard';
import { EmployeeGuard } from './service/employee.guard';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'employee/new', component: EmployeeOnboardingComponent,
    canDeactivate: [EmployeeGuard], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
