import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    let request = new HttpRequest('GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true });
    return this.http.request(request);
  }
}
