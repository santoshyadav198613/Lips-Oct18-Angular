import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from './service/photos.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  totalLoaded = 0;
  title: string;
  constructor(private photosService: PhotosService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data) => {
       this.title = data.title;
    });

    this.photosService.getPhotos().subscribe((res) => {
      switch (res.type) {
        case HttpEventType.DownloadProgress:
          this.totalLoaded += res.loaded;
          break;
        case HttpEventType.Response:
          console.log(res.body);
          break;

      }
    });
  }
}
