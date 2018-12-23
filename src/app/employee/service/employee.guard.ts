import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanDeactivate<EmployeeOnboardingComponent> {

  canDeactivate(component: EmployeeOnboardingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.onboardingForm.valid;
  }
}
