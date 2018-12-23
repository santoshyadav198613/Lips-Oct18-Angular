import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostAddComponent } from './post-add/post-add.component';
import { AuthGuard } from '../guards/auth.guard';
import { PostAddGuard } from './service/post-add.guard';

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    canActivate: [AuthGuard], canActivateChild : [PostAddGuard],
    children: [
      { path: ':id', component: PostAddComponent }
    ]
  },
  // { path: 'posts/:id', component: PostAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
