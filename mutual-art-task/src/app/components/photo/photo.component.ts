import { Component, Input, OnInit } from '@angular/core';

import { Photo } from '../../models/app.models';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.less']
})
export class PhotoComponent implements OnInit {
  @Input('currentPhoto') currentPhoto: Photo

  constructor() { }

  ngOnInit() {
  }

}
