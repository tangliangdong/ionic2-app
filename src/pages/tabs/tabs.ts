import { Component,ViewChild } from '@angular/core';
import { ModalController,ViewController,NavController,Tabs,Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CommunityPage } from '../community/community';
import { MellPage } from '../mell/mell';
import { PersonPage } from '../person/person';
import { LoginCenterPage } from '../loginCenter/loginCenter';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CommunityPage;
  tab3Root: any = MellPage;
  tab4Root: any = PersonPage;

  @ViewChild('myTabs') tabRef: Tabs;
  constructor(public modalCtrl: ModalController,
              public viewCtrl: ViewController,
            public navCtrl: NavController,
          public plt: Platform) {
    this.plt.ready().then(() => {

    });
  }

  ionViewDidEnter(){

  }

  selectedMe(){
    if(localStorage.getItem('phone') == null){
      console.log(this.tabRef);
      //this.navCtrl.push(LoginCenterPage);
      let loginCenterModal = this.modalCtrl.create(LoginCenterPage);
      loginCenterModal.onDidDismiss(data => {
        if(localStorage.getItem('second')!=null){
          this.tabRef.select(this.tabRef.previousTab());
          localStorage.removeItem('second');
        }
      });
      loginCenterModal.present();
      if(localStorage.getItem('second')==null){
        this.tabRef.select(this.tabRef.previousTab());
      }
      //this.tabRef.select(0);

    }
  }
}
