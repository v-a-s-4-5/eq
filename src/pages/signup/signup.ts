import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 
  userDetails = {
    ID:'',
    firstname: '',
    lastname: '',
    email: '',
    password:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  } 

  async signUp(signUpData){ 
    try{ 
        const result = await firebase.auth().createUserWithEmailAndPassword(
                        signUpData.email,
                        signUpData.password
                       );        
        if(result){
          firebase.database().ref('/users').push({
              ID: result.uid,
              firstname: signUpData.firstname,
              lastname: signUpData.lastname,
              status: 0
          });
        this.navCtrl.push(TabsPage)
          .then(() => {
            console.log('Welcome to your News Feed!');
          })      
        }
    }
    catch (e){
      console.error(e);
     }
  }

  goToLogin() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(LoginPage, {}, {cssClass: 'modal-gradient'});
    modal.present();
  }

}
