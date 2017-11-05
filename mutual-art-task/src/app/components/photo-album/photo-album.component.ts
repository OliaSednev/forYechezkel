import { Component, OnInit, TemplateRef } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/modal-options.class';

import { Photo } from '../../models/app.models';

@Component({
  selector: 'photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.less']
})
export class PhotoAlbumComponent implements OnInit {

  albumPhotos: Photo[];
  selectedPhoto: Photo;
  editedPhoto: Photo;
  imageUrl: any;

  public modalRef: BsModalRef;

  constructor(private photoService: PhotoService,
              private modalService: BsModalService) {
  }

  ngOnInit() {
    this.albumPhotos = this.photoService.getPhotos();
  }

  openModal(template: TemplateRef<any>, photo: Photo) {
    this.selectedPhoto = photo;

    this.editedPhoto = {
      id: photo.id,
      photo: photo.photo,
      description: photo.description
    };
    this.modalRef = this.modalService.show(template);
  }

  save() {
    this.selectedPhoto.id = this.editedPhoto.id;
    this.selectedPhoto.photo = this.editedPhoto.photo;
    this.selectedPhoto.description = this.editedPhoto.description;

    this.photoService.editPhoto(this.selectedPhoto);

    this.modalRef.hide();
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    const imgtag = <HTMLImageElement>document.getElementById('currentImage');
    imgtag.title = selectedFile.name;

    const self = this;
    reader.onload = function (event) {
      imgtag.src = reader.result;
      self.editedPhoto.photo = imgtag.src;
    };

    reader.readAsDataURL(selectedFile);
  }

  deletePhoto(photo: Photo) {
    this.photoService.deleteItem(photo);

    this.modalRef.hide();
  }

}
