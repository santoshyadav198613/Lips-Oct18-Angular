import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { PhotosComponent } from './photos/photos.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'book', component: BookComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
