import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,ToastController} from 'ionic-angular';
import * as $ from "jquery";
// import { AddAddressPage } from '../addAddress/addAddress';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})

export class CommentPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController) {
    // $('.dynamic-button').on('click', '.dynamic-button', function(event) {
    //   event.preventDefault();
    //   console.log(111);
    // });
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    
  }
}
