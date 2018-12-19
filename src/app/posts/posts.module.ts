import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
