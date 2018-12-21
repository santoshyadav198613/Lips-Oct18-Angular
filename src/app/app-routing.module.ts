import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { PhotosComponent } from './photos/photos.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'department', component: DepartmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photos', component: PhotosComponent,
    data: {
      title: 'Photos List',
      count: 10
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'book', component: BookComponentComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
