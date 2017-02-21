import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html'
})
export class ReadPage {
  read_segment: string = 'art';
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController) {

  }



}
