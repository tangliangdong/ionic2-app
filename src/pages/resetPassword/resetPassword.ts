import { Component } from '@angular/core';
import { Toast } from 'ionic-native';

import { NavController,ModalController,ViewController ,NavParams,ToastController,LoadingController} from 'ionic-angular';
// import * as $ from "jquery";

@Component({
  selector: 'page-resetPassword',
  templateUrl: 'resetPassword.html'
})

export class ResetPasswordPage {
  reset = {
    verification: '',
    phone: ''
  }
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams,
      public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

  }

  /**
   * 完成输入验证码
   * @return {[type]} [description]
   */
  complete(){
    if(this.reset.verification === ''){
      let completeToast = this.toastCtrl.create({
        message: '请输入验证码',
        duration: 3000,
        position: 'top'
      });
      completeToast.present();
    }else{
      let completeToast = this.toastCtrl.create({
        message: '已发送验证码，请注意查收',
        duration: 3000,
        position: 'top'
      });
      completeToast.present();
      this.viewCtrl.dismiss();
    }
  }

/**
 * 发送验证码，以重置用户密码
 * @return {[type]} [description]
 */
  sendValidation(){
    if(!(/^1[34578]\d{9}$/.test(this.reset.phone))){
      let sendToast = this.toastCtrl.create({
        message: '手机号码有误，请重填',
        duration: 3000,
        position: 'top'
      });
      sendToast.present();
      return false;
    }else{
      let sendToast = this.toastCtrl.create({
        message: '已发送验证码，请注意查收',
        duration: 3000,
        position: 'top'
      });
      sendToast.present();
    }
    // Toast.show("已发送验证码，注意查收", '3000', 'top').subscribe(
    //   toast => {
    //     console.log(toast);
    //   }
    // );

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

}
