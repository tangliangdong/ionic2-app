import { Component } from '@angular/core';

import { NavController, ModalController, ViewController } from 'ionic-angular';
//import * as $ from "jquery";
import { LoginCenterPage } from '../loginCenter/loginCenter';
import { CommentPage } from '../comment/comment';
import { TabsPage } from '../tabs/tabs';
import { MessagePushPage } from '../messagePush/messagePush';
import { AboutXunyiPage } from '../aboutXunyi/aboutXunyi';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage {


  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

  }

  /**
   * 注销登录
   * 移除session
   * @return {[type]} [description]
   */
  logout() {
    localStorage.removeItem('phone');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(LoginCenterPage);
  }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    // $('.searchbar-input').focus();
  }

  openSettingPage(item) {
    switch (item.id) {
      case 1:
        this.navCtrl.push(MessagePushPage);
        break;
      case 2:
        this.navCtrl.push(CommentPage);
        break;
      case 3:

        break;
      case 4:
        this.navCtrl.push(AboutXunyiPage);
        break;
    }
  }

  settingClass = [
    {
      id: 1,
      name: '消息推送',
    },
    {
      id: 2,
      name: '意见反馈',
    },
    // {
    //   id: 3,
    //   name: '清空缓存',
    // },

    {
      id: 4,
      name: '关于寻艺',
    },

  ]


}
