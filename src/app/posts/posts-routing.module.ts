import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostAddComponent } from './post-add/post-add.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id' , component : PostAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
