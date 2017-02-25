import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import { DiyDetailPage } from '../diyDetail/diyDetail'
//import * as $ from "jquery";

@Component({
  selector: 'page-diy',
  templateUrl: 'diy.html'
})

export class DiyPage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  ionSelected(item){
    let diyModal = this.modalCtrl.create(DiyDetailPage,{
      good: item
    });
    diyModal.present();
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  diy_goods = [
    {
      id: 1,
      img: 'assets/img/mell/13.png',
      type: '丝巾'
    },
    {
      id: 2,
      img: 'assets/img/mell/14.png',
      type: '手机壳'
    },
    {
      id: 3,
      img: 'assets/img/mell/15.png',
      type: '帆布包'
    },
    {
      id: 4,
      img: 'assets/img/mell/16.png',
      type: '地毯'
    },
    {
      id: 5,
      img: 'assets/img/mell/17.png',
      type: '鼠标垫'
    },
    {
      id: 6,
      img: 'assets/img/mell/18.png',
      type: '束口袋'
    },
  ]

}
