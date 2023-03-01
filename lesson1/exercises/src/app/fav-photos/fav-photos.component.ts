import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://t4.ftcdn.net/jpg/04/56/20/89/360_F_456208906_h2bZ51348xqpFcYXh4sGUiQDF5zolfRm.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}