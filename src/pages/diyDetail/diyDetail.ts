import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams,ActionSheetController} from 'ionic-angular';
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
        public params: NavParams,
      public actionSheetCtrl: ActionSheetController) {
    this.good = params.get('good');
    console.log(this.good);
  }

  upload(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '照片图库',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '拍照',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
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
