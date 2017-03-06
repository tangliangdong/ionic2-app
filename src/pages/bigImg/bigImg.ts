import { Component } from '@angular/core';
import {Transfer } from 'ionic-native';

import { NavController, ModalController, ViewController, NavParams, ActionSheetController, ToastController} from 'ionic-angular';
//import * as $ from "jquery";

declare var cordova: any;

@Component({
  selector: 'page-bigImg',
  templateUrl: 'bigImg.html',
})

export class BigImgPage {
  img;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController) {
    this.img = this.params.get('img');
  }

  holdLongTime() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '保存到相册',
          role: 'destructive',
          handler: () => {

            let saveToast = this.toastCtrl.create({
              message: '已保存到相册',
              position: 'top',
              duration: 1000,
            });
            saveToast.present();
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    actionSheet.present();
  }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    // $('.searchbar-input').focus();
  }

}
