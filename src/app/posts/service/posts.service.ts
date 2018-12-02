import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iposts } from './Iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts'); //this is using for Get Method all Data Displaing
  }

  addPost(post: Iposts){
     return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post);
  }
}
