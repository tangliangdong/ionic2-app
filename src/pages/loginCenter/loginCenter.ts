import { Component,ViewChild } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,NavParams,Tabs,Platform} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisteredPage } from '../registered/registered';
import { LoginPage } from '../login/login';
// import * as $ from "jquery";

@Component({
  selector: 'page-loginCenter',
  templateUrl: 'loginCenter.html'
})

export class LoginCenterPage {
  @ViewChild('myTabs') tabRef: Tabs;
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams,
      public platform: Platform) {
    // platform.ready().then(() => {
    //   if(localStorage.getItem('first')!=null){
    //     this.navCtrl.setRoot(TabsPage);
    //   }
    // });
  }

  loginInPlatform(number){
    switch(number){
      case 1:
        console.log("QQ");
      break;
      case 2:
        console.log("微信");
      break;
      case 3:
        console.log("微博");
      break;

    }
  }

  registered(){
    let registeredModal = this.modalCtrl.create(RegisteredPage);
    registeredModal.present();
  }

  login(){
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  backToHome(){
    //this.navCtrl.pop();
    console.log(localStorage.getItem('first'));
    if(localStorage.getItem('first')!=null){
      localStorage.removeItem('first');
      this.navCtrl.setRoot(TabsPage);
    }else{
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
