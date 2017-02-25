import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';

import { NavController,ModalController,ViewController ,ToastController} from 'ionic-angular';
import * as $ from "jquery";
// import { AddAddressPage } from '../addAddress/addAddress';

@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html'
})

export class TopicPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController) {
    // $('.dynamic-button').on('click', '.dynamic-button', function(event) {
    //   event.preventDefault();
    //   console.log(111);
    // });
  }

  sendTopic(){
    let sendToast = this.toastCtrl.create({
      message: '话题描述不能为空',
      duration: 2000,
      position: 'top'
    });

    sendToast.present();
  }

  userinfo = {
    img: '',
  }

  user;

  uploadImg(){
    let options = {
      maximumImagesCount: 2,
      width: 1000,
      height: 1000,
      quality: 100,
    };

    ImagePicker.getPictures(options).then((results) => {
      this.user = [];
      console.log(results);
      for (let i = 0; i < results.length; i++) {
          this.userinfo.img = results[i];
          console.log(this.userinfo);
          this.user.push(results[i]);
      }
      console.log(this.user);
      //this.userinfo.img = results[0];
    }, (err) => { });

  }
  // Camera(){
  //   Camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64:
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }

  unfold(){
    $(function(){
      let button = $('#unfold-button');
      if(button.children('span').text().trim()=='展开'){
        // button.children('.button-inner>.icon').addClass('ion-ios-arrow-up-outline');
        // button.children('.button-inner>.icon:before').css('content', "\f3d8");
        button.children('span').text('收起');
        $('#label-area').css('height','auto');

      }else{
        // button.children('.button-inner>.icon').addClass('ion-ios-arrow-down-outline');
        // button.children('.button-inner>.icon:before').css('content', '\f3d0');
        button.children('span').text('展开');
        $('#label-area').css('height','80');
      }
    });
  }

  choose_list = [];

  itemSelected(item){
    this.choose_list.push(item);
    $('#label-area').children('.label-button').each(function(index, el) {
      console.log($(this).children('span').children('span').eq(0).text());
      if($(this).children('span').children('span').eq(0).text()==item.id){
        $(this).remove();
        return false;
      }
    });
    console.log(this.choose_list);
    $('#choose_label').append('<button class="label-button dynamic-button disable-hover button button-ios button-outline button-outline-ios button-outline-ios-editbutton item-button" color="editbutton" ion-button="" outline="" tappable="" ng-reflect-color="editbutton" data="'+item.id+'"><span class="button-inner">'+
        item.word+
      '</span><div'+ 'class="button-effect"></div></button>');
  }

  cancelLabel(id){
    console.log(id);
  }

  backToHome(){
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter(){
    // $('.searchbar-input').focus();
  }

  labels = [
    {
      id: 1,
      word: '摄影',
    },
    {
      id: 2,
      word: '雕塑',
    },
    {
      id: 3,
      word: '绘画',
    },
  ]
}
