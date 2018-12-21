import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: EmployeeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
export class EmployeeRoutingModule { }
