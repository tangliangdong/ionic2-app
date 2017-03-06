import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
import * as $ from "jquery";

import { BigImgPage } from '../bigImg/bigImg';

@Component({
  selector: 'page-productDetail',
  templateUrl: 'productDetail.html'
})

export class ProductDetailPage {
  product;
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public params: NavParams) {
    this.product = params.get('product');
  }

  collected(){
    $(function(){
      $('#heart-icon').css({

        color: 'red'
      })
      console.log($('#heart-icon::before'));
      $('#heart-icon::before').css('content', '\f443',)
    });
  }

  openLargeImage(event: Event, url) {
    // 禁止事件冒泡
    event.stopPropagation();
    console.log(url);
    let imgModal = this.modalCtrl.create(BigImgPage,
    {img:url});
    imgModal.present();
    // PhotoViewer.show('http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg');
    //PhotoViewer.show(url);
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

}
