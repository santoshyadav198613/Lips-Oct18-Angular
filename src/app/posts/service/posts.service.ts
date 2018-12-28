import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iposts } from './Iposts';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get<Iposts[]>('https://jsonplaceholder.typicode.com/posts',
    //   { headers: new HttpHeaders().set('apikey', 'dsdsfgdg') }); //this is using for Get Method all Data Displaing

    return this.http.get<Iposts[]>(environment.apiEndpoint + 'posts');
  }

  addPost(post: Iposts) {
    // return this.http.post<Iposts>('https://jsonplaceholder.typicode.com/posts', post,
    //  { headers: new HttpHeaders().set('apikey', 'dsdsfgdg') });

    return this.http.post<Iposts>(environment.apiEndpoint + 'posts', post);
  }

  getPostById(id: number) {
    return this.http.get<Iposts>(environment.apiEndpoint + 'posts/' + id);
  }

  updatePostById(post: Iposts) {
    return this.http.put<Iposts>(environment.apiEndpoint + 'posts/' + post.id, post);
  }
}
