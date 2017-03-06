import { Component } from '@angular/core';
import { SafariViewController } from 'ionic-native';

import { NavController, ModalController, ViewController } from 'ionic-angular';
import * as $ from "jquery";

import { TryOutPage } from '../tryOut/tryOut';

@Component({
  selector: 'page-showFullScreen',
  templateUrl: 'showFullScreen.html'
})

export class ShowFullScreenPage {
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    $(function() {
      var index = 0;
      var canMove = true;
      var transformPlace = 0;
      var length = $('.section').length;
      let doc = $('#sections');
      console.log(doc);

      setTimeout(function() {
        init();
      }, 1000)

      // doc.addEventListener("touchstart", startTouchScroll, false);
      // doc.addEventListener("touchmove", moveTouchScroll, false);
      // doc.addEventListener("touchend", endTouchScroll, false);
      var startY, endY, startX, endX;
      doc.on("touchstart", function(e) {
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
        console.log("start:(" + startX + "," + startY + ")" + "--");
      });
      doc.on("touchmove", function(e) {
        var x = e.originalEvent.changedTouches[0].pageX - startX;
        var y = e.originalEvent.changedTouches[0].pageY - startY;
        // if (Math.abs(x) > Math.abs(y)) {//左右滑动
        //   console.log(x);
        // } else if (Math.abs(y) > Math.abs(x)) {//上下滑动
        //   console.log(y);
        // }
        console.log(index)

        if (index >= 0 && index < length) {
          console.log(y);
          if (y < 0 && index < length - 1) {
            if (canMove) {
              transformPlace += 100;
              $(this).css({
                transform: 'translateY(-' + transformPlace + '%)'
              });
              canMove = false;
              index++;
            }
            setTimeout(function() {
              canMove = true;
              startPage(index);
            }, 1000);


          } else if (y > 0 && index > 0) {
            if (canMove) {
              transformPlace -= 100;
              $(this).css({
                transform: 'translateY(-' + transformPlace + '%)'
              });
              index--;
              canMove = false;
            }
            setTimeout(function() {
              canMove = true;
              startPage(index);
            }, 1000);

          }
        }
      });

      /**
       * 初始化h5的第一个页面
       * @return {[type]} [description]
       */
      function init() {
        setTimeout(function() {
          $('.col2>.img1,.col2>.img2').addClass('img-rotate');
          setTimeout(function() {
            $('.hr2').addClass('hr2-animate');
            $('.hr1').addClass('hr1-animate')

          }, 1000)
        }, 2000);

        $('#section1-title').addClass('h4-animate');
        $('#section1-title+p').addClass('p-animate');
      }


      function startPage(index) {
        switch (index) {
          case 0:
            init();
            break;
          case 1:
            removeClass();
            break;
          case 2:

            break;
          case 3:

            break;

        }
      }

      function removeClass() {
        $('.col2>.img1,.col2>.img2').removeClass('img-rotate');
        $('.hr2').removeClass('hr2-animate');
        $('.hr1').removeClass('hr1-animate');
        $('#section1-title').removeClass('h4-animate');
        $('#section1-title+p').removeClass('p-animate');
      }

    });
  }

  tryout(){
    this.navCtrl.push(TryOutPage);
  }

  backToHome() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {

    $(".scroll-content").scroll(function() {
      console.log(111);
    });
  }





}
