import { Component,ViewChild } from '@angular/core';

import { NavController,Slides } from 'ionic-angular';
@Component({
  selector: 'page-mell',
  templateUrl: 'mell.html'
})
export class MellPage {
  @ViewChild('myslides') slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  slides2 = [
    {
      image: "assets/img/mell/mell1.png",
    },
    {
      image: "assets/img/mell/mell2.png",
    },
  ];

  mellthings = [
    {
      image : {
        first: 'assets/img/mell/shoes.png',
        second: 'assets/img/mell/cup.png'
      } ,
    }
  ];


}
