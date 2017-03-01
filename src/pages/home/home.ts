import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { ArtistPage } from '../artist/artist';
import { ReadPage } from '../read/read';
import { SearchPage } from '../search/search';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController) {

  }

  openArtistPage(){
    let artistModal = this.modalCtrl.create(ArtistPage);
    artistModal.present();
  }

  openReadPage(){
    let readModal = this.modalCtrl.create(ReadPage);
    readModal.present();
  }
  openSearchPage(){
    let searchModal = this.modalCtrl.create(SearchPage);
    searchModal.present();
  }

  openCreatePage(){
    this.navCtrl.push(CreatePage);
    // let createModal = this.modalCtrl.create(CreatePage);
    // createModal.present();
  }

  slides = [
    {
      title: "",
      description: "",
      image: "assets/img/posters/fangao.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/posters/zhanmusi.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/posters/wuxianzhimeng.png",
    }
  ];

  // 主页展示卡片信息
  home_cards = [
    {
      title: '展览推荐',
      author: 'WOLF-王野夫',
      studio: '艾米李画廊',
      place: '北京',
      startTime: '2017.02.17',
      endTime: '03.19',
      images: [
        {
          img: "assets/img/card/IMG_3845.JPG",
        },
        {
          img: "assets/img/card/IMG_3846.JPG",
        },
        {
          img: "assets/img/card/IMG_3847.JPG",
        },
        {
          img: "assets/img/card/IMG_3848.JPG",
        },
        {
          img: "assets/img/card/IMG_3849.JPG",
        },
      ]
    },
    {
      title: '展览推荐',
      author: 'WOLF-王野夫',
      studio: '艾米李画廊',
      place: '北京',
      startTime: '2017.02.17',
      endTime: '03.19',
      images: [
        {
          img: "assets/img/card/IMG_3845.JPG",
        },
        {
          img: "assets/img/card/IMG_3846.JPG",
        },
        {
          img: "assets/img/card/IMG_3847.JPG",
        },
        {
          img: "assets/img/card/IMG_3848.JPG",
        },
        {
          img: "assets/img/card/IMG_3849.JPG",
        },
      ]
    }
  ];



}
