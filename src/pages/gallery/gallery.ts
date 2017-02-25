import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
//import * as $ from "jquery";

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  gallerys = [
    {
      id: 1,
      img: 'assets/img/square/IMG_3533.JPG',
    },
    {
      id: 2,
      img: 'assets/img/square/IMG_3534.JPG',
    },
    {
      id: 3,
      img: 'assets/img/square/IMG_3535.JPG',
    },
    {
      id: 4,
      img: 'assets/img/square/IMG_3536.JPG',
    },
    {
      id: 5,
      img: 'assets/img/square/IMG_3537.JPG',
    },
    {
      id: 6,
      img: 'assets/img/square/IMG_3538.JPG',
    },
    {
      id: 7,
      img: 'assets/img/square/IMG_3539.JPG',
    },
    {
      id: 8,
      img: 'assets/img/square/IMG_3540.JPG',
    },
    {
      id: 9,
      img: 'assets/img/square/IMG_3541.JPG',
    },

  ]


}
