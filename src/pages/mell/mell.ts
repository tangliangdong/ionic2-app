import { Component,ViewChild } from '@angular/core';

import { NavController,Slides,ModalController } from 'ionic-angular';
import { IntegralPage } from '../integral/integral';
import { DiyPage } from '../diy/diy';
import { ProductMorePage } from '../productMore/productMore';
import { ProductDetailPage } from '../productDetail/productDetail';

@Component({
  selector: 'page-mell',
  templateUrl: 'mell.html'
})
export class MellPage {
  @ViewChild('myslides') slides: Slides;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  openIntegralPage(){
    let integralModal = this.modalCtrl.create(IntegralPage);
    integralModal.present();
  }

  openDiy(){
    let diyModal = this.modalCtrl.create(DiyPage);
    diyModal.present();
  }

  openMorePage(){
    let productMoreModal = this.modalCtrl.create(ProductMorePage);
    productMoreModal.present();
  }

  openDetailPage(item){
    let productDetailModal = this.modalCtrl.create(ProductDetailPage,{
      product: item
    });
    productDetailModal.present();
  }

  slides2 = [
    {
      image: "assets/img/mell/mell1.png",
    },
    {
      image: "assets/img/mell/mell2.png",
    },
  ];

  mellthings = [
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
