import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
//import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

import { Camera, CameraOptions } from '@ionic-native/camera';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  avtarImage: any;
  attachments: any;
  base64Data: any;
  post = {
    content: ''
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    //public imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    //public ImagePickerOptions: ImagePickerOptions
    public camera: Camera
  ) {
      this.getAvtarImage();
  }

  getAvtarImage(){
    let user = firebase.auth().currentUser;    
    firebase.database().ref('/users').orderByChild('ID').equalTo(user.uid).once('value' , resData=>{
        let key = Object.keys(resData.val());
        this.avtarImage = resData.val()[key[0]].img;        
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openPhotoPicker() {     
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
    }    
    this.camera.getPicture(options)
      .then((results) => {       
        this.attachments = 'data:image/jpeg;base64,'+results; 
        this.base64Data =   results;   
      }, (err) => {
       });
  }

  submit(post) {   
    let r = Math.random();
    let imageName = ['camerar',r].join('_');
    firebase.storage().ref('/posts').child(imageName).putString(this.base64Data, 'base64', {contentType: 'image/png'}).then(res=>{
      let imagePath = res.downloadURL;   
      let user = firebase.auth().currentUser;           
      firebase.database().ref('/users').orderByChild('ID').equalTo(user.uid).once('value', resData=>{
        let key = Object.keys(resData.val());
        firebase.database().ref().child('/posts/' + key)
        .update({ img: imagePath });
      });

    },err=>{
      alert("error"+JSON.stringify(err));
    }).catch(error =>{
       alert(JSON.stringify(error));
    });

    let toast = this.toastCtrl.create({
      message: 'Post has been added successfully',
      duration: 3000
    });
    toast.present();
    this.dismiss();
  }

}
 