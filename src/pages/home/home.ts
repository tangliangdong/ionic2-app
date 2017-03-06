import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { ArtistPage } from '../artist/artist';
import { ReadPage } from '../read/read';
import { SearchPage } from '../search/search';
import { CreatePage } from '../create/create';
import { Works } from '../../modals/works';
import { Html5Page } from '../html5/html5';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController) {

  }

/**
 * 打开h5展览页面
 * @return {[type]} [description]
 */
  openHtml5(){
    this.navCtrl.push(Html5Page,{});
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

  trackingList(index: number, card: Works){
    return card.id;
  }

  slides = [
    {
      title: "",
      description: "",
      image: "assets/img/posters/fangao.png",
    },
    {
      title: "",
      description: "",
      image: "assets/img/posters/zhanmusi.png",
    },
    {
      title: "",
      description: "",
      image: "assets/img/posters/wuxianzhimeng.png",
    }
  ];
  // 主页展示卡片信息
  home_cards = [
    {
      id: 1,
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
      id: 2,
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
      id: 1,
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
      id: 1,
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
  ];



}
