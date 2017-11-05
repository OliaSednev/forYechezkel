import {Injectable} from '@angular/core';

import { Photo } from '../models/app.models';


@Injectable()
export class PhotoService {

  private photos: Photo[] = [
    {
      "id": "1",
      "description": "Veronica Roth",
      "photo": "../../assets/images/1.jpg"
    },
    {
      "id": "2",
      "description": "George Lucas",
      "photo": "../../assets/images/2.jpg"
    },
    {
      "id": "3",
      "description": "J.K. Rolling",
      "photo": "../../assets/images/3.jpg"
    },
    {
      "id": "4",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/4.jpg"
    },
    {
      "id": "5",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/5.jpg"
    },
    {
      "id": "6",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/6.jpg"
    },
    {
      "id": "7",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/7.jpg"
    },
    {
      "id": "8",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/8.jpg"
    },
    {
      "id": "9",
      "description": "Margret Mitchell",
      "photo": "../../assets/images/9.jpg"
    },

    ];

  getPhotos() {
    return this.photos;
  }

  editPhoto(photo: Photo) {
    const index = this.photos.indexOf(photo);
    this.photos[index].photo = photo.photo;
    this.photos[index].description = photo.description;
  }

  createPhoto(photo: Photo) {
    this.photos.splice(0,0,photo);
  }

  deleteItem(photo: Photo) {
    this.photos.splice(this.photos.findIndex(photoItem => photoItem.id === photo.id), 1);
  }

}
