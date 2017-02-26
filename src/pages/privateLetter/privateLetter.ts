import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,ToastController} from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-privateLetter',
  templateUrl: 'privateLetter.html'
})

export class PrivateLetterPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){

  }

  list = [
    {
      id: 1,
      name: '关注',
    },
    {
      id: 2,
      name: '回复',
    },
    {
      id: 3,
      name: '赞',
    },
    {
      id: 4,
      name: '艺术狗',
    },
  ]

}
