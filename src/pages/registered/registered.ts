import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,NavParams,ToastController} from 'ionic-angular';
import * as $ from "jquery";

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html'
})

export class RegisteredPage {
  user = {
    phone : '',
    readed : false,
    password: '',
  }
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams,
      public toastCtrl: ToastController) {

  }

/**
 * 注册的下一步
 * @return {[type]} [description]
 */
  next(){
    if(!/^1[34578]\d{9}$/.test(this.user.phone)){
      let nextToast = this.toastCtrl.create({
        message: '手机号码有误，请重填',
        duration: 3000,
        position: 'top'
      });
      nextToast.present();
    }else if(this.user.password==""){
      let sendToast = this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000,
        position: 'top'
      });
      sendToast.present();
    }else if(/^1[34578]\d{9}$/.test(this.user.phone)&&this.user.password!==""){

    }
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
