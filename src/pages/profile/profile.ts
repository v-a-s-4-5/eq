import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';


import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  changeImg(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
    }
    this.camera.getPicture(options).then((ImageData) => {
      let base64Image = 'data:image/jpeg;base64,' + ImageData;
      let r = Math.random();
      let imageName = ['camerar',r].join('_');
      firebase.storage().ref('/images').child(imageName).putString(ImageData, 'base64', {contentType: 'image/png'}).then(res=>{         
        let user = firebase.auth().currentUser;
        let imagePath = res.downloadURL;        
        firebase.database().ref('/users').orderByChild('ID').equalTo(user.uid).once('value', resData=>{
          let key = Object.keys(resData.val());
          firebase.database().ref().child('/users/' + key)
          .update({ img: imagePath });
        });
      })
    }, err=>{
      alert("error"+JSON.stringify(err));
    });
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage)
      .then(() => {
        console.log('Welcome to Settings');
      })
  }

}
