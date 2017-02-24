import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CommunityPage } from '../pages/community/community';
import { MellPage } from '../pages/mell/mell';
import { PersonPage } from '../pages/person/person';
import { ArtistPage } from '../pages/artist/artist';
import { ReadPage } from '../pages/read/read';
import { SearchPage } from '../pages/search/search';
import { CreatePage } from '../pages/create/create';
import { EditUserPage } from '../pages/edituser/edituser';
import { IndentPage } from '../pages/indent/indent';
import { ShippingAddressPage } from '../pages/shippingAddress/shippingAddress';
import { AddAddressPage } from '../pages/addAddress/addAddress';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    MellPage,
    PersonPage,
    CommunityPage,
    HomePage,
    ArtistPage,
    TabsPage,
    ReadPage,
    CreatePage,
    SearchPage,
    EditUserPage,
    IndentPage,
    ShippingAddressPage,
    AddAddressPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MellPage,
    PersonPage,
    CommunityPage,
    HomePage,
    CreatePage,
    ArtistPage,
    TabsPage,
    ReadPage,
    SearchPage,
    EditUserPage,
    IndentPage,
    ShippingAddressPage,
    AddAddressPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
