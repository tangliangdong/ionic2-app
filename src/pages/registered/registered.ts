import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
import * as $ from "jquery";

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html'
})

export class RegisteredPage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams) {

  }

  backToLogin(){
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

}
