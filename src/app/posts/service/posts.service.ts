import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iposts } from './Iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts',
    //   { headers: new HttpHeaders().set('apikey', 'dsdsfgdg') }); //this is using for Get Method all Data Displaing

    return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post: Iposts) {
    // return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post,
    //  { headers: new HttpHeaders().set('apikey', 'dsdsfgdg') });

    return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post);
  }

  getPostById(id: number) {
    return this.http.get<Iposts>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  updatePostById(post: Iposts) {
    return this.http.put<Iposts>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
