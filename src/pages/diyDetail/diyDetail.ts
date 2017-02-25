import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
//import * as $ from "jquery";
import { GalleryPage } from '../gallery/gallery'
@Component({
  selector: 'page-diyDetail',
  templateUrl: 'diyDetail.html'
})

export class DiyDetailPage {
  good;
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams) {
    this.good = params.get('good');
    console.log(this.good);
  }


  openGallery(){
    let galleryModal = this.modalCtrl.create(GalleryPage);
    galleryModal.present();
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }


}
