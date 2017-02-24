import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
//import * as $ from "jquery";

@Component({
  selector: 'page-addAddress',
  templateUrl: 'addAddress.html'
})

export class AddAddressPage {

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



}
