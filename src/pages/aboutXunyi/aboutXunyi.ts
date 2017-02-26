import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,ToastController,Platform} from 'ionic-angular';
import * as $ from "jquery";
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-aboutXunyi',
  templateUrl: 'aboutXunyi.html'
})

export class AboutXunyiPage {
  isAndroid;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
            public platform: Platform) {
    if (this.platform.is('android')) {
      // This will only print when on iOS
      this.isAndroid = true;
      console.log("I'm an Android device!");
    }
  }

  grade(){
    let gradeToast = this.toastCtrl.create({
      message: '敬请期待评分功能',
      duration: 2000,
      position: 'top'
    });
    gradeToast.present();
  }

  contact(){
    this.navCtrl.push(ContactPage);
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){

  }
}
