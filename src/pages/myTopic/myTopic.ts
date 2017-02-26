import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,ToastController} from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-myTopic',
  templateUrl: 'myTopic.html'
})

export class MyTopicPage {

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
}
