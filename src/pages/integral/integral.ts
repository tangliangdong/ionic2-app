import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-integral',
  templateUrl: 'integral.html'
})

export class IntegralPage {

  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  signIn(){
    $(function(){
      $('#signIn-button').children('span').text('已签到');
      $('#signIn-button').css({
        'background-color': '#ccc',
        'color': 'white'
      })
    });
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  Redemptions = [
    {
      img: 'assets/img/square/1.png',
      name: '联邦走马文艺书签',
      type: '(画家)',
      integral : 960
    },
    {
      img: 'assets/img/square/1.png',
      name: '联邦走马文艺书签',
      type: '画家',
      integral : 960
    },
    {
      img: 'assets/img/square/1.png',
      name: '联邦走马文艺书签',
      type: '画家',
      integral : 960
    },
    {
      img: 'assets/img/square/1.png',
      name: '联邦走马文艺书签',
      type: '画家',
      integral : 960
    },
    {
      img: 'assets/img/square/1.png',
      name: '联邦走马文艺书签',
      type: '画家',
      integral : 960
    },
  ]


}
