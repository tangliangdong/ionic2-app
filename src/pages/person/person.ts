import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {

  constructor(public navCtrl: NavController) {

  }


  items = [
    {
      logo: 'assets/img/setting/indent.png',
      title: '我的订单'
    },
    {
      logo: 'assets/img/setting/address.png',
      title: '我的收货地址'
    },
    {
      logo: 'assets/img/setting/collect.png',
      title: '我的收藏'
    },
    {
      logo: 'assets/img/setting/topic.png',
      title: '我的话题'
    },
    {
      logo: 'assets/img/setting/private-letter.png',
      title: '消息和私信'
    },
    {
      logo: 'assets/img/setting/setting.png',
      title: '设置'
    }
  ]
}
