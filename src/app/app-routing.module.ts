import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { PhotosComponent } from './photos/photos.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'department', component: DepartmentComponent },
  {
    path: 'photos', component: PhotosComponent,
    data: {
      title: 'Photos List',
      count: 10
    }
  },
  { path: 'book', component: BookComponentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
