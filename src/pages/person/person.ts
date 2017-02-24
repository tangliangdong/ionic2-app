import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';

import { EditUserPage } from '../edituser/edituser';
import { IndentPage } from '../indent/indent';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController) {

  }

  openEditUser(){
    let editUserModal = this.modalCtrl.create(EditUserPage);
    editUserModal.present();
  }

  openPage(item){
    switch(item.id){
      case 1:
      let indentModal = this.modalCtrl.create(IndentPage);
      indentModal.present();
      break;
    }
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
