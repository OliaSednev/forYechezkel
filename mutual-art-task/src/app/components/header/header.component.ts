import {Component} from '@angular/core';
import {PhotoService} from '../../services/photo.service';

import {Photo} from '../../models/app.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  imagePath?: any;
  loadedPhoto?: any;
  newPhoto: Photo;

  constructor(private photoService: PhotoService) { }


  cleareSearch(input: HTMLInputElement) {
    input.value = '';
  }

  imageUpload(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.loadedPhoto = reader.result;
    }

    reader.readAsDataURL(file);
    setTimeout(() => {
      this.addNewPhoto();
    }, 100);
  }

  addNewPhoto(){
    this.newPhoto = {};

    this.newPhoto.id = this.getNewGuid();
    this.newPhoto.photo = this.loadedPhoto;
    this.newPhoto.description = "";

    this.photoService.createPhoto(this.newPhoto);
    this.newPhoto = null;
  }

  getNewGuid(): string {

    const guid = (this.S4() + this.S4() + '-' + this.S4() + '-4' + this.S4()
      .substr(0, 3) + '-' + this.S4() + '-' + this.S4() + this.S4() + this.S4())
      .toLowerCase();
    return guid;
  }

  S4() {
    return ( ( (1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

}





