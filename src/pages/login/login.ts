import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,NavParams,ToastController,LoadingController} from 'ionic-angular';
import * as $ from "jquery";
import { TabsPage } from '../tabs/tabs';
import {ResetPasswordPage} from '../resetPassword/resetPassword';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  user = {
    phone: '',
    password: ''
  }
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams,
      public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

  }

  openResetPage(){
    this.navCtrl.push(ResetPasswordPage);
  }

  doLogin(){
    if(!/^1[34578]\d{9}$/.test(this.user.phone)||this.user.phone===''){
      let errorToast = this.toastCtrl.create({
        message: '请输入正确的手机号码！',
        duration: 2000,
        position: 'top'
      });
      errorToast.present();
      return false;
    }
    if(this.user.password===''){
      let errorToast = this.toastCtrl.create({
        message: '请输入密码！',
        duration: 2000,
        position: 'top'
      });
      errorToast.present();
      return false;
    }
    if(this.user.phone==='18868748898'&&this.user.password==="123"){
      this.navCtrl.setRoot(TabsPage);
      localStorage.setItem('username','123');
      localStorage.setItem('id','1');
      localStorage.setItem('phone','123');
      let loading = this.loadingCtrl.create({
        content: '正在登录...',
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    }else{
      let loginToast = this.toastCtrl.create({
        message: '手机号码不存在或密码错误！',
        duration: 2000,
        position: 'top'
      });
      loginToast.present();
    }

    //this.navCtrl.setRoot(PersonPage);
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

}
