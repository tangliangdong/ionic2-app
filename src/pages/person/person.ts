import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { EditUserPage } from '../edituser/edituser';
import { ShippingAddressPage } from '../shippingAddress/shippingAddress';
import { IndentPage } from '../indent/indent';
import { CollectionPage } from '../collection/collection';
import { SettingPage } from '../setting/setting';
import { PrivateLetterPage } from '../privateLetter/privateLetter';
import { MyTopicPage } from '../myTopic/myTopic';
import { BigImgPage } from '../bigImg/bigImg';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

/**
 * 编辑用户信息
 * @return {[type]} [description]
 */
  openEditUser(information) {
    let editUserModal = this.modalCtrl.create(EditUserPage,{
      user: information
    });
    editUserModal.present();
  }

/**
 * 点击查看大图
 * @param  {Event}  event [description]
 * @param  {[type]} url   [description]
 * @return {[type]}       [description]
 */
  openLargeImage(event: Event, url) {
    // 禁止事件冒泡
    event.stopPropagation();
    console.log(url);
    let imgModal = this.modalCtrl.create(BigImgPage,
    {img:url});
    imgModal.present();
    // PhotoViewer.show('http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg');
    //PhotoViewer.show(url);
  }

  openPage(item) {
    switch (item.id) {
      case 1:
        // let indentModal = this.modalCtrl.create(IndentPage);
        // indentModal.present();
        this.navCtrl.push(IndentPage);
        break;
      case 2:
        // let shippingAddressModal = this.modalCtrl.create(ShippingAddressPage);
        // shippingAddressModal.present();
        this.navCtrl.push(ShippingAddressPage);
        break;
      case 3:
        // let collectionModal = this.modalCtrl.create(CollectionPage);
        // collectionModal.present();
        this.navCtrl.push(CollectionPage);
        break;
      case 4:
        this.navCtrl.push(MyTopicPage);
        break;
      case 5:
        this.navCtrl.push(PrivateLetterPage);
        break;
      case 6:
        // let settingModal = this.modalCtrl.create(SettingPage);
        // settingModal.present();
        this.navCtrl.push(SettingPage);
        break;

    }
  }

  user = {
    id: 1,
    sex: 1,
    username: '蓝色一只雕',
    avatar: 'assets/img/avatar/lanseyizhidiao.png',
    signature: '',
    commentsNum: 112,
    attentionNum: 128,
    fanNum: 36,

  }

  items = [
    {
      id: 1,
      logo: 'assets/img/setting/indent.png',
      title: '我的订单'
    },
    {
      id: 2,
      logo: 'assets/img/setting/address.png',
      title: '我的收货地址'
    },
    {
      id: 3,
      logo: 'assets/img/setting/collect.png',
      title: '我的收藏'
    },
    {
      id: 4,
      logo: 'assets/img/setting/topic.png',
      title: '我的话题'
    },
    {
      id: 5,
      logo: 'assets/img/setting/private-letter.png',
      title: '消息和私信'
    },
    {
      id: 6,
      logo: 'assets/img/setting/setting.png',
      title: '设置'
    }
  ]
}
