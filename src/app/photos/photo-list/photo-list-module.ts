import {NgModule} from '@angular/core';
import {PhotoListComponent} from './photo-list.component';
import {LoadButtonComponent} from './load-button/load-button.component';
import {FilterByDescriptionPipe} from './filter-by-description.pipe';
import {CommonModule} from '@angular/common';
import {PhotoModule} from '../photo/photo.module';
import {PhotosComponent} from './photos/photos.component';
import {CardModule} from '../../shared/components/card/card.module';
import {SearchComponent} from './search/search.component';
import {DarkenOnHoverModule} from '../../shared/components/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [ CommonModule, PhotoModule, CardModule, DarkenOnHoverModule]
})
export class PhotoListModule {}
