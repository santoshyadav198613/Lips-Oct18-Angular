import { Component, OnInit } from '@angular/core';
import { PhotosService } from './service/photos.service';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  totalLoaded: number=0;
  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe((res) => {
      switch (res.type) {
        case HttpEventType.DownloadProgress:
          this.totalLoaded += res.loaded;
          break;
        case HttpEventType.Response:
          console.log(res.body)
          break;

      }
    })
  }
}
