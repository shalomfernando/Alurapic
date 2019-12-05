import {Component, OnDestroy, OnInit} from '@angular/core';
import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRouute: ActivatedRoute, private photpservice: PhotoService) {}

  ngOnInit(): void {
    this.photos = this.activatedRouute.snapshot.data.photos;
    this.userName = this.activatedRouute.snapshot.params.userName;

    // const userName = this.activatedRouute.snapshot.params.userName;
    // this.photoService
    //   .listarFromUser(userName)
    //   .subscribe(photos =>
    //       this.photos = photos,
    //     err => console.log(err.message) );
  }
  load() {
    this.photpservice.listfromUserPaginate(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }

  // destruir o subscrub


}
