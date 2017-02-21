import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CommunityPage } from '../community/community';
import { MellPage } from '../mell/mell';
import { PersonPage } from '../person/person';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CommunityPage;
  tab3Root: any = MellPage;
  tab4Root: any = PersonPage;

  constructor() {

  }
}
