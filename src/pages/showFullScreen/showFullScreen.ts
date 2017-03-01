import { Component } from '@angular/core';
import { SafariViewController } from 'ionic-native';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-showFullScreen',
  templateUrl: 'showFullScreen.html'
})

export class ShowFullScreenPage {
  constructor(public navCtrl: NavController,
            public modalCtrl: ModalController,
          public viewCtrl: ViewController) {
    //   SafariViewController.isAvailable()
    // .then(
    //   (available: boolean) => {
    //     if(available){
    //
    //       SafariViewController.show({
    //         url: 'http://ionic.io',
    //         hidden: false,
    //         animated: true,
    //         transition: 'curl',
    //         enterReaderModeIfAvailable: true,
    //         tintColor: '#ff0000',
    //         showDefaultShareMenuItem: false,
    //       })
    //       .then(
    //         (result: any) => {
    //           if(result.event === 'opened') console.log('Opened');
    //           else if(result.event === 'loaded') console.log('Loaded');
    //           else if(result.event === 'closed') console.log('Closed');
    //         },
    //         (error: any) => console.error(error)
    //       );
    //
    //     } else {
    //       // use fallback browser, example InAppBrowser
    //     }
    //   }
    // );
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){

    $(".scroll-content").scroll(function() {
      console.log(111);
    });
  }





}
