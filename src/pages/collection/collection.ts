import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
//import * as $ from "jquery";

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html'
})

export class CollectionPage {


  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  doRefresh(event){
    console.log(event);
    setTimeout(() => {
      event.complete();
    }, 2000);

  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }



}
