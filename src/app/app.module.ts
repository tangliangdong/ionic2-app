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
import { CollectionPage } from '../pages/collection/collection';
import { TopicPage } from '../pages/topic/topic';
import { IntegralPage } from '../pages/integral/integral';
import { DiyPage } from '../pages/diy/diy';
import { DiyDetailPage } from '../pages/diyDetail/diyDetail';
import { GalleryPage } from '../pages/gallery/gallery';
import { ProductMorePage } from '../pages/productMore/productMore';
import { ProductDetailPage } from '../pages/productDetail/productDetail';

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
    AddAddressPage,
    CollectionPage,
    TopicPage,
    IntegralPage,
    DiyPage,
    DiyDetailPage,
    GalleryPage,
    ProductMorePage,
    ProductDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp
      // ,{
      // tabsHideOnSubPages:"true", // nav在push的时候隐藏tabs
      // backButtonText: '',
      // iconMode: 'ios',
      // mode: 'ios'
      // }
    )
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
    AddAddressPage,
    CollectionPage,
    TopicPage,
    IntegralPage,
    DiyPage,
    DiyDetailPage,
    GalleryPage,
    ProductMorePage,
    ProductDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
