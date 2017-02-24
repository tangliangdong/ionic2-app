import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
//import * as $ from "jquery";

@Component({
  selector: 'page-indent',
  templateUrl: 'indent.html'
})

export class IndentPage {
  indent_segment: string = 'all';
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
