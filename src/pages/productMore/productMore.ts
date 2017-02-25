import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
//import * as $ from "jquery";

@Component({
  selector: 'page-productMore',
  templateUrl: 'productMore.html'
})

export class ProductMorePage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  products = [
    {
      name: '艺术雪地靴',
      price: 660,
      image: 'assets/img/mell/shoes.png',
    },
    {
      name: '陶瓷',
      price: 368,
      image: 'assets/img/mell/cup.png',
    },
    {
      name: '艺术雪地靴',
      price: 660,
      image: 'assets/img/mell/shoes.png',
    },
    {
      name: '陶瓷',
      price: 368,
      image: 'assets/img/mell/cup.png',
    }
  ];



}
