import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  search_segment: string = 'hot';

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
