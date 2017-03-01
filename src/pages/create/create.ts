import { Component } from '@angular/core';

import { NavController,ModalController,ViewController,ToastController } from 'ionic-angular';
//import * as $ from "jquery";
import { ShowFullScreenPage } from '../showFullScreen/showFullScreen'

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})

export class CreatePage {
  create_segment: string = 'all';

  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController,
        public toastCtrl: ToastController) {

  }


  chooseTemplate(item){
    this.navCtrl.push(ShowFullScreenPage);
  }

  doRefresh(event){
    event.compete();
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  alls = [
    {
      img: 'assets/img/square/woodcarving.png'
    },
    {
      img: 'assets/img/square/IMG_3597.png'
    },
    {
      img: 'assets/img/square/IMG_3932.png'
    },
    {
      img: 'assets/img/square/IMG_3745.png'
    },
  ]

}
