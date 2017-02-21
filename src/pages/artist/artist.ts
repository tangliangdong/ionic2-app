import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html'
})
export class ArtistPage {
  artist_segment: string = "recommended";

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {

  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  recomended_users = [
    {
      userId: 4,
      username: '白帆',
      avatar: 'assets/img/avatar/IMG_3491.png',
      worksNum: 43,
      fansNum: 1466,
      images: [
        {
          img: 'assets/img/square/IMG_3582.png'
        },
        {
          img: 'assets/img/square/IMG_3583.png'
        },
        {
          img: 'assets/img/square/IMG_3584.png'
        },
        {
          img: 'assets/img/square/IMG_3585.png'
        },
      ],
    },
    {
      userId: 5,
      username: '鲍东海',
      avatar: 'assets/img/avatar/IMG_3819.png',
      worksNum: 42,
      fansNum: 190,
      images: [
        {
          img: 'assets/img/square/IMG_3699.png'
        },
        {
          img: 'assets/img/square/IMG_3702.png'
        },
        {
          img: 'assets/img/square/IMG_3706.png'
        },
        {
          img: 'assets/img/square/IMG_3703.png'
        },
      ],
    },
    {
      userId: 6,
      username: '卜番',
      avatar: 'assets/img/avatar/IMG_3492.png',
      worksNum: 25,
      fansNum: 819,
      images: [
        {
          img: 'assets/img/square/IMG_3711.png'
        },
        {
          img: 'assets/img/square/IMG_3714.png'
        },
        {
          img: 'assets/img/square/IMG_3715.png'
        },
        {
          img: 'assets/img/square/IMG_3713.png'
        },
      ],
    }
  ];

  ranking_users = [
    {
      userId: 7,
      username: '黄子益',
      avatar: 'assets/img/avatar/IMG_3689.png',
      sort: 1,
      worksNum: 154,
      week_browses: 64603,
      images: [
        {
          img: 'assets/img/square/IMG_3912.png'
        },
        {
          img: 'assets/img/square/IMG_3913.png'
        },
        {
          img: 'assets/img/square/IMG_3914.png'
        },
        {
          img: 'assets/img/square/IMG_3916.png'
        },
      ],
    },
    {
      userId: 4,
      username: '刘铮非',
      sort: 3,
      avatar: 'assets/img/avatar/IMG_3580.png',
      worksNum: 14,
      week_browses: 33959,
      images: [
        {
          img: 'assets/img/square/IMG_3926.png'
        },
        {
          img: 'assets/img/square/IMG_3927.png'
        },
        {
          img: 'assets/img/square/IMG_3928.png'
        },
        {
          img: 'assets/img/square/IMG_3930.png'
        },
      ],
    },
    {
      userId: 4,
      username: 'cheryl',
      sort: 3,
      avatar: 'assets/img/avatar/IMG_3489.png',
      worksNum: 128,
      week_browses: 25654,
      images: [
        {
          img: 'assets/img/square/IMG_3672.png'
        },
        {
          img: 'assets/img/square/IMG_3676.png'
        },
        {
          img: 'assets/img/square/IMG_3675.png'
        },
        {
          img: 'assets/img/square/IMG_3674.png'
        },
      ],
    }
  ];

  newest_users = [
    {
      userId: 4,
      username: '白帆',
      avatar: 'assets/img/avatar/IMG_3491.png',
      worksNum: 43,
      fansNum: 1466,
      images: [
        {
          img: 'assets/img/square/IMG_3582.png'
        },
        {
          img: 'assets/img/square/IMG_3583.png'
        },
        {
          img: 'assets/img/square/IMG_3584.png'
        },
        {
          img: 'assets/img/square/IMG_3585.png'
        },
      ],
    },
    {
      userId: 4,
      username: '白帆',
      avatar: 'assets/img/avatar/IMG_3491.png',
      worksNum: 43,
      fansNum: 1466,
      images: [
        {
          img: 'assets/img/square/IMG_3582.png'
        },
        {
          img: 'assets/img/square/IMG_3583.png'
        },
        {
          img: 'assets/img/square/IMG_3584.png'
        },
        {
          img: 'assets/img/square/IMG_3585.png'
        },
      ],
    }
  ];

}
