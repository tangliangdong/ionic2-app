import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { TopicPage } from '../topic/topic';
import { DynamicDetailPage } from '../dynamicDetail/dynamicDetail'

import * as $ from "jquery";
@Component({
  selector: 'page-community',
  templateUrl: 'community.html'
})
export class CommunityPage {

  communication: string = "recommended";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,
            platform: Platform,
            public modalCtrl: ModalController) {
    this.isAndroid = platform.is('android');


  }

  openDynamicDetailPage(item){
    let dynamicModal = this.modalCtrl.create(DynamicDetailPage,{
      dynamic: item
    });
    dynamicModal.present();
  }

  ionViewDidEnter(){
    let grid = $('#list-grid ion-col');
    let gridWidth = grid.first().outerWidth();
    for(let i = 0 ; i < grid.length ; i++ ){
      grid.eq(i).css('height',gridWidth);
    }
  }

  selectedcom(){
    $(function(){
      let grid = $('#list-grid ion-col');
      console.log(grid);
      let gridWidth = grid.first().outerWidth();
      for(let i = 0 ; i < grid.length ; i++ ){
        grid.eq(i).css('height',gridWidth);
      }
    });
  }

  openTopicPage(){
    let topicModal = this.modalCtrl.create(TopicPage);
    topicModal.present();
  }
  /**
   * 点击图片查看大图
   * @return {[type]} [description]
   */
  openLargeImage(event: Event){
    // 禁止事件冒泡
    event.stopPropagation();
    console.log(event);
  }

  recommend_items = [
    {
      userId: '1',
      user: '蓝暖',
      avatar: 'assets/img/avatar/lannuan.png',
      signature: '剪切，拼接，镂空，浑然一体。',
      time: '02月23日',
      images: [
        {
          a: 'assets/img/square/IMG_3533.JPG',
          b: 'assets/img/square/IMG_3534.JPG',
          c: 'assets/img/square/IMG_3535.JPG'
        },
        {
          a: 'assets/img/square/IMG_3536.JPG',
          b: 'assets/img/square/IMG_3537.JPG',
          c: 'assets/img/square/IMG_3538.JPG'
        },
        {
          a: 'assets/img/square/IMG_3539.JPG',
          b: 'assets/img/square/IMG_3540.JPG',
          c: 'assets/img/square/IMG_3541.JPG'
        },
      ],
      thumbsNum: 3,
      commentNum: 1,
      addTime: '2月19日',
      comments: [
        {
          user: '薄日',
          word: '给人一种腾云驾雾之感。',
        },
        {
          user: '松果儿',
          word: '色彩感觉很好！',
        }
      ]
    }
  ];

  news_items = [
    {
      userId: '2',
      user: 'SHERRY',
      avatar: 'assets/img/avatar/sherry_avatar.png',
      signature: '石头亦有别样的风采，与一般的石头相比，他们只是多了排列组合。',
      time: '02月23日',
      images: [
        {
          a: 'assets/img/square/IMG_3807.png',
          b: 'assets/img/square/IMG_3808.png',
          c: 'assets/img/square/IMG_3809.png'
        },
        {
          a: 'assets/img/square/IMG_3810.png',
          b: 'assets/img/square/IMG_3811.png',
          c: 'assets/img/square/IMG_3812.png'
        },
        {
          a: 'assets/img/square/IMG_3813.png',
          b: 'assets/img/square/IMG_3814.png',
          c: 'assets/img/square/IMG_3815.png'
        },
      ],
      thumbsNum: 5,
      commentNum: 2,
      addTime: '2月19日',
      comments: [
        {
          user: '薄日',
          word: '给人一种腾云驾雾之感。',
        },
        {
          user: '松果儿',
          word: '色彩感觉很好！',
        }
      ]
    }
  ];

  attention_items = [
    {
      userId: '3',
      user: '画府成奇。。',
      avatar: 'assets/img/avatar/huafuchengqi.png',
      signature: '色彩的魅力',
      time: '02月23日',
      images: [
        {
          a: 'assets/img/square/IMG_3592.png',
          b: 'assets/img/square/IMG_3593.png',
          c: 'assets/img/square/IMG_3594.png'
        },
        {
          a: 'assets/img/square/IMG_3596.png',
          b: 'assets/img/square/IMG_3597.png',
          c: 'assets/img/square/IMG_3598.png'
        },
      ],
      thumbsNum: 5,
      commentNum: 2,
      addTime: '2月19日',
      comments: [
        {
          user: '薄日',
          word: '给人一种腾云驾雾之感。',
        },
        {
          user: '松果儿',
          word: '色彩感觉很好！',
        }
      ]
    }
  ];




}
