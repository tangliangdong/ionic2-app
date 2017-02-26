import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginCenterPage } from '../pages/loginCenter/loginCenter';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = LoginCenterPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      localStorage.setItem('first','1');
      localStorage.setItem('second','2');
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
