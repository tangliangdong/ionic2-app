import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController, ModalController, ViewController, NavParams, PopoverController,AlertController} from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-dynamicDetail',
  templateUrl: 'dynamicDetail.html'
})

export class DynamicDetailPage {
  detail;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController) {
    this.detail = params.get('dynamic');
    let imgs = [];
    for (let i = 0; i < this.detail.images.length; i++) {
      imgs.push(this.detail.images[i].a);
      imgs.push(this.detail.images[i].b);
      imgs.push(this.detail.images[i].c);
    }
    this.detail['imgs'] = imgs;
  }

  hidden() {
    $('#shareCurtain').animate({
      'opacity': '0'
    }, 400, function() {
      $('#shareCurtain').css('z-index', 0);
    });
  }

  /**
   * 上传评论图片
   * @return {[type]} [description]
   */
  upload() {
    let options = {
      maximumImagesCount: 2,
      width: 1000,
      height: 1000,
      quality: 100,
    };

    ImagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        // this.userinfo.img = results[i];
        // console.log(this.userinfo);
        // this.user.push(results[i]);
      }
    }, (err) => { });
  }

  share(myEvent) {
    $('#shareCurtain').css('z-index', 100);
    $('#shareCurtain').animate({
      'opacity': 1
    }, 400);
  }

  shareWhat(event: Event, No) {
    event.stopPropagation();
    switch (No) {
      case 1:

        break;
      case 2:

        break;
      case 3:
        let QQalert = this.alertCtrl.create({
          title: '“寻艺”想要打开“QQ”',
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: '打开',
              handler: () => {
                console.log('Buy clicked');
              }
            }
          ]
        });
        QQalert.present();
        break;
      case 4:

        break;
      case 5:

        break;
    }
  }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    // $('.searchbar-input').focus();
  }

}
