import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iposts } from '../service/Iposts';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  posts: Iposts = {
    body: '',
    id: 0,
    title: '',
    userId: 0
  };

  id: number = 0;

  constructor(private postsService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data['id'];
      if (this.id > 0) {
        this.postsService.getPostById(this.id).subscribe(
          (response) => {
            this.posts = response;
          })
      }
    });
  }

  addPost() {
    if (this.posts.id > 0) {
      this.postsService.updatePostById(this.posts).subscribe((data) => this.posts = data);
      console.log(this.posts);
    } else {
      this.postsService.addPost(this.posts).subscribe((data) => console.log(data));
      console.log(this.posts);
    }
  }
}
