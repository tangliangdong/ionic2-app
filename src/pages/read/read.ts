import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  read_segment: string = 'art';
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  arts = [
    {
      title: '立体主义和现实主义的碰撞',
      img: 'assets/img/read/IMG_3962.png',
      reading: 11873,
      comments: 12
    },
    {
      title: '欧洲第一个水下博物馆在加纳利群岛开发',
      img: 'assets/img/read/IMG_3963.png',
      reading: 11396,
      comments: 19
    },
    {
      title: '宋氏三姐妹在绘画领域上竟也这么厉害',
      img: 'assets/img/read/IMG_3964.png',
      reading: 10429,
      comments: 23
    },
    {
      title: '华丽的餐具雕刻',
      img: 'assets/img/read/IMG_3965.png',
      reading: 1081,
      comments: 9
    }
  ];

  designs = [
    {
      title: '立体主义和现实主义的碰撞',
      img: 'assets/img/read/IMG_3962.png',
      reading: 11873,
      comments: 12
    }
  ];

  photographys = [
    {
      title: '立体主义和现实主义的碰撞',
      img: 'assets/img/read/IMG_3962.png',
      reading: 11873,
      comments: 12
    }
  ]

  lifes = [
    {
      title: '立体主义和现实主义的碰撞',
      img: 'assets/img/read/IMG_3962.png',
      reading: 11873,
      comments: 12
    }
  ]



}
