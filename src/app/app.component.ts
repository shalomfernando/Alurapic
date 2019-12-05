import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotoService} from './photos/photo/photo.service';
import {Photo} from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alurapic';
  photos: Photo[];

  constructor(public photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .listarFromUser('flavio')
      .subscribe(photos =>
          this.photos = photos,
        err => console.log(err.message) );
  }

}
