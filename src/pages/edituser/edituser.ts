import { Component } from '@angular/core';
import { ImagePicker, ImageResizer, ImageResizerOptions } from 'ionic-native';


import { NavController, ModalController, ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html'
})

export class EditUserPage {
  detail;
  isMan;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

    this.detail = this.params.get('user');
    this.isMan = this.detail.sex == 0? false : true;
  }

  changeImg() {
    var options = {
      maximumImagesCount: 1,
      width: 100,
      height: 100,
      quality: 100,
      outputType: 0
    };
    ImagePicker.getPictures(options).then((results) => {

      let option = {
        uri: results[0],
        folderName: 'Protonet',
        quality: 90,
        width: 100,
        height: 100
      } as ImageResizerOptions;

      ImageResizer
        .resize(option)
        .then(
        (filePath: string) => {
          console.log('！！！---------------------------------------------------------------------------------------------------------！！！');
          console.log('FilePath', filePath);
          this.detail.avatar = filePath;
        },
        () => {

        }
        )
    }, (err) => { });
  }

  selected(number, event) {
    switch (number) {
      case 1:
        this.detail.sex = 1;
        this.isMan = true;
        break;
      case 2:
        this.detail.sex = 0;
        this.isMan = false;
        break;
    }
  }

  /**
   * 保存用户信息
   * @return {[type]} [description]
   */
  save() {
    let saveAlert = this.alertCtrl.create({
      title: '确定保存用户信息吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: () => {
            let saveLoading = this.loadingCtrl.create({
              spinner: 'bubbles',
              content: '正在保存...'
            });

            saveLoading.present();

            setTimeout(() => {
              saveLoading.dismiss();
            }, 1000);

          }
        }
      ]
    });
    saveAlert.present();
  }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    // $('.searchbar-input').focus();
  }



}
