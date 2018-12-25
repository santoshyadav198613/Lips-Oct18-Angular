import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostAddComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
