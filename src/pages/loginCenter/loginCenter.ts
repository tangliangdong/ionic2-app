import { Component, ViewChild } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController, ModalController, ViewController, NavParams, Platform,ToastController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisteredPage } from '../registered/registered';
import { LoginPage } from '../login/login';
// import * as $ from "jquery";

@Component({
  selector: 'page-loginCenter',
  templateUrl: 'loginCenter.html'
})

export class LoginCenterPage {
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public platform: Platform,
    public toastCtrl: ToastController) {
    // platform.ready().then(() => {
    //   if(localStorage.getItem('first')!=null){
    //     this.navCtrl.setRoot(TabsPage);
    //   }
    // });
  }

/**
 * 使用其他社交软件的账号登录
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 */
  loginInPlatform(number) {
    switch (number) {
      case 1:
        let socialToast = this.toastCtrl.create({
          message: '使用QQ帐号登录！',
          duration: 2000,
          position: 'top'
        });
        socialToast.present();
        console.log("QQ");
        break;
      case 2:
        let socialToast1 = this.toastCtrl.create({
          message: '使用微信账号登录！',
          duration: 2000,
          position: 'top'
        });
        socialToast1.present();
        console.log("微信");
        break;
      case 3:
        let socialToast2 = this.toastCtrl.create({
          message: '使用微博账号登录！',
          duration: 2000,
          position: 'top'
        });
        socialToast2.present();
        console.log("微博");
        break;

    }
  }


  registered() {
    let registeredModal = this.modalCtrl.create(RegisteredPage);
    registeredModal.present();
  }

  login() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  backToHome() {
    //this.navCtrl.pop();
    console.log(localStorage.getItem('first'));
    if (localStorage.getItem('first') != null) {
      localStorage.removeItem('first');
      this.navCtrl.setRoot(TabsPage);
    } else {
      // this.navCtrl.pop();
      this.viewCtrl.dismiss();
    }
    //this.tab.select(this.tab.previousTab());
  }

  // ionViewDidEnter(){
  //   if(localStorage.getItem('first')!=null){
  //     //localStorage.setItem('first','1');
  //     this.navCtrl.setRoot(TabsPage);
  //   }
  // }

}
