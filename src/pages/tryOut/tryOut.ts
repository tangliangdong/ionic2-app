import { Component } from '@angular/core';
import { SafariViewController } from 'ionic-native';

import { NavController, ModalController, ViewController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-tryOut',
  templateUrl: 'tryOut.html'
})

export class TryOutPage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {

    
  }

  // panEvent(e) {
  //   console.log(e);
  // }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {


  }

}
