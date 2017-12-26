import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController,LoadingController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

import  firebase  from 'firebase'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    email: '',
    password: ''
  }

  constructor(public alertData: AlertController,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private loadingCtrl: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  async login(user){
    let loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
        content: 'loading..'
      });
      loading.present();
    try{  
      const result = await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
      if(result){
          loading.dismiss();
          this.navCtrl.push(TabsPage).then(() => {
            console.log('Welcome to your News Feed!');
          })
      }  
    } 
    catch(e){
      let alert = this.alertData.create({
          title: 'Either username or password is incorrect',        
          buttons: ['ok']
      });
      alert.present();
    }  
  }

  changePassword(){
      let prompt = this.alertData.create({
          title: "Enter your Email",
          message: "A new password will be emailed to your Email",
          inputs: [{
              name: 'email',
              placeholder: 'Enter your email'
            }
          ],
          buttons:[
            {
              text: 'Cancel',
              handler: data =>{
                  console.log('Cancel Clicked');
              }
            },
            {
              text: 'submit',
              handler: data=> {

                let loading = this.loadingCtrl.create({
                              dismissOnPageChange: true,
                              content: 'Reseting your Password..'
                });
                loading.present();
                firebase.auth().sendPasswordResetEmail(data.email).then(()=>{
                  loading.dismiss().then(()=>{
                    let successPrint = this.alertData.create({
                        title: 'Please check your email',
                        subTitle: 'Password reset successfully',
                        buttons: ['Ok']
                    })
                    successPrint.present();
                  })
                },error => {
                  let errorPrint = this.alertData.create({
                      title: 'Error to reseting your password',
                      subTitle: error.message,
                      buttons: ['Ok']
                  })
                  errorPrint.present();
                });
              }
            }
          ]
      });
      prompt.present();
  }

  goToSignup() {
    this.viewCtrl.dismiss();
    let modal = this.modalCtrl.create(SignupPage, {}, {cssClass: 'modal-gradient'});
    modal.present();
  }

}
