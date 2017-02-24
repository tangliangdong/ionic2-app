import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import { AddAddressPage } from '../addAddress/addAddress';
//import * as $ from "jquery";

@Component({
  selector: 'page-shippingAddress',
  templateUrl: 'shippingAddress.html'
})

export class ShippingAddressPage {


  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  add(){
    let addAddressModal = this.modalCtrl.create(AddAddressPage);
    addAddressModal.present();
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }



}
