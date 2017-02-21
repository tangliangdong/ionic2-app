import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import { ArtistPage } from '../artist/artist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController) {

  }

  limitActivity(){
    console.log(111);
    let artistModal = this.modalCtrl.create(ArtistPage);
   artistModal.present();
  }

  cards = [
    {
      image: "assets/img/card/IMG_3845.JPG",
    },
    {
      image: "assets/img/card/IMG_3846.JPG",
    },
    {
      image: "assets/img/card/IMG_3847.JPG",
    },
    {
      image: "assets/img/card/IMG_3848.JPG",
    },
    {
      image: "assets/img/card/IMG_3849.JPG",
    },
  ];

  slides = [
    {
      title: "",
      description: "",
      image: "assets/img/posters/fangao.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];



}
