import { Component } from '@angular/core';

import { NavController,ModalController,ViewController ,NavParams} from 'ionic-angular';
import * as $ from "jquery";

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

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

}
