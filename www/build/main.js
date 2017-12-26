webpackJsonp([16],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPostPage = (function () {
    function NewPostPage(navCtrl, navParams, viewCtrl, imagePicker, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.getAvtarImage();
    }
    NewPostPage.prototype.getAvtarImage = function () {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users').orderByChild('ID').equalTo(user.uid).once('value', function (resData) {
            var key = Object.keys(resData.val());
            _this.avtarImage = resData.val()[key[0]].img;
        });
    };
    NewPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPostPage');
    };
    NewPostPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewPostPage.prototype.openPhotoPicker = function () {
        var _this = this;
        this.imagePicker.getPictures({})
            .then(function (results) {
            _this.attachments = results;
        }, function (err) { });
    };
    NewPostPage.prototype.submit = function () {
        var toast = this.toastCtrl.create({
            message: 'Post has been added successfully',
            duration: 3000
        });
        toast.present();
        this.dismiss();
    };
    return NewPostPage;
}());
NewPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-new-post',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\new-post\new-post.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button color="light" (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Post</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content class="content-noscroll">\n  <div class="wrapper-sm post-new h-full">\n    <ion-row class="h-full">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <img class="rounded thumb-sm" src="{{ avtarImage }}">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="scroll-y">\n        <ion-textarea fz-elastic placeholder="Share an article, photo, video or idea"></ion-textarea>\n        <ion-card *ngFor="let imageUri of attachments">\n          <img [src]="imageUri" alt="">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer [keyboardAttach]="content">\n  <ion-toolbar position="bottom" color="white">\n    <ion-buttons start class="padder-sm">\n      <button ion-button icon-only>\n        <ion-icon name="ios-settings-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start class="padder-sm">\n      <button ion-button icon-only>\n        <ion-icon name="ios-at-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start class="padder-sm">\n      <button ion-button icon-only (click)="openPhotoPicker()">\n        <ion-icon name="ios-videocam-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons start class="padder-sm">\n      <button ion-button icon-only (click)="openPhotoPicker()">\n        <ion-icon name="ios-camera-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <div class="padder-sm" float-right>\n      <button ion-button item-end primary small class="r" (click)="submit()">\n        <span class="font-bold">Post</span>\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\new-post\new-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], NewPostPage);

//# sourceMappingURL=new-post.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activeSegment = '0';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="white" class="my-toolbar no-padder">\n    <ion-segment mode="md" [(ngModel)]="activeSegment">\n      <ion-segment-button value="0">\n        Account\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        Privacy\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        Communications\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <h3>Email addresses</h3>\n      <div class="text-muted text-sm">Add or remove email addresses on your account</div>\n    </ion-item>\n    <ion-item>\n      <h3>Phone numbers</h3>\n      <div class="text-muted text-sm">Add a phone number to help keep your account secure</div>\n    </ion-item>\n    <ion-item>\n      <h3>Change password</h3>\n      <div class="text-muted text-sm">Choose a unique password to protect your account</div>\n    </ion-item>\n    <ion-item>\n      <h3>Video Autoplay</h3>\n      <div class="text-muted text-sm">Choose when to autoplay videos</div>\n    </ion-item>\n    <ion-item>\n      <h3>Sync contacts</h3>\n      <div class="text-muted text-sm">Automatically find people you know</div>\n    </ion-item>\n    <ion-item>\n      <h3>Sync calendar</h3>\n      <div class="text-muted text-sm">Automatically sync your calender</div>\n    </ion-item>\n    <ion-item>\n      <h3>Feed preferences</h3>\n      <div class="text-muted text-sm">Make your feed your own</div>\n    </ion-item>\n    <ion-item>\n      <h3>Try Premium for free</h3>\n      <div class="text-muted text-sm">Unlock the power of LinkedIn</div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_popover_post_popover__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_post__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_post_new_post__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.presentPopover = function (event) {
        event.stopPropagation();
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_post_popover_post_popover__["a" /* PostPopoverComponent */], {}, {
            cssClass: 'my-popover'
        });
        popover.present({
            ev: event
        });
    };
    HomePage.prototype.goToPost = function (postId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__post_post__["a" /* PostPage */], {
            postId: postId
        })
            .then(function () {
            console.log('Welcome to post:', postId);
        });
    };
    HomePage.prototype.newPost = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_post_new_post__["a" /* NewPostPage */]);
        modal.present();
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */], {})
            .then(function () {
            console.log('Welcome to search');
        });
    };
    HomePage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */], {})
            .then(function () {
            console.log('Welcome to profile');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-avatar>\n          <img class="rounded thumb-xxs b b-white" src="assets/img/hieu.png">\n        </ion-avatar>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar placeholder="Search" (ionFocus)="goToSearch()"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only menuToggle>\n        <ion-icon ios="md-grid" md="md-grid"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar color="white" class="my-toolbar box-shadow" (click)="newPost()">\n    <div class="text-muted m-l-sm">\n      Share an article, photo, video or idea\n    </div>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-videocam-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-camera-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <div class="m-t-sm bg-white" *ngFor="let i of [0,1,2,3,4,5]; let postIndex = index" (click)="goToPost(postIndex)">\n    <ion-row class="padder-sm b-b b-light" *ngIf="postIndex % 2 == 1">\n      <ion-col align-self-center>\n        <div class="text-muted text-sm">\n          <span class="font-bold color-black">Blake Lively</span> commented on this\n        </div>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-icon class="text-2x text-muted" name="more" (click)="presentPopover($event)"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class="wrapper-sm">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="text-ellipsis-flex">\n        <div class="l-h">\n          <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}}</div>\n          <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n          <div class="text-sm text-muted">2d · Edited</div>\n        </div>\n      </ion-col>\n      <ion-col col-auto>\n        <ion-icon class="text-2x text-muted" name="more" (click)="presentPopover($event)"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <div class="post-caption padder m-b-sm pos-rlt l-h">\n      The site has an Alexa Internet ranking as the 20th most popular website (October 2016). Based in the United States, the site is, as of 2013, available in 24 languages,[11] including Arabic, Chinese, English, French\n      <span class="pos-abt bottom right text-muted padder bg-white">...see more</span>\n    </div>\n\n    <post-attachment type="{{postIndex % 2 == 1 ? \'url\' : \'image\'}}"></post-attachment>\n\n    <div class="padder m-b-sm">\n      <div class="b-b b-light">\n        <div class="m-t-sm m-b-sm">\n          6 Likes · 24 Comments\n        </div>\n      </div>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small color="muted">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Like</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small color="muted">\n          <ion-icon name="text"></ion-icon>\n          <div>Comment</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <button ion-button icon-left clear small color="muted">\n          <ion-icon name="share"></ion-icon>\n          <div>Share</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionsPage = (function () {
    function ConnectionsPage(navCtrl, navParams, viewCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    ConnectionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectionsPage');
    };
    ConnectionsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConnectionsPage.prototype.openSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Sort connections by',
            cssClass: 'my-action-sheet',
            buttons: [
                {
                    text: 'First name',
                    handler: function () {
                    }
                }, {
                    text: 'Last name',
                    handler: function () {
                    }
                }, {
                    text: 'Recently Added',
                    handler: function () {
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return ConnectionsPage;
}());
ConnectionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-connections',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\connections\connections.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button color="light" (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Connections</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content #content class="content-noscroll">\n  <div class="wrapper b-b b-light">\n    Sort by <span class="font-bold">Recently Added</span>\n    <ion-icon name="ios-options" float-right (click)="openSheet()"></ion-icon>\n  </div>\n  <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n    <ion-col col-auto>\n      <ion-avatar item-start>\n        <demo-avatar [sizeClass]="\'thumb\'"></demo-avatar>\n      </ion-avatar>\n    </ion-col>\n    <ion-col class="text-ellipsis-flex">\n      <div class="l-h">\n        <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}}</div>\n        <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n        <div class="text-xs text-muted">\n          Connected 5 days ago\n        </div>\n      </div>\n    </ion-col>\n    <ion-col col-auto align-self-center>\n      <ion-icon class="text-2x text-muted" name="more"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\connections\connections.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ConnectionsPage);

//# sourceMappingURL=connections.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connections_connections__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NetworkPage = (function () {
    function NetworkPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    NetworkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NetworkPage');
    };
    NetworkPage.prototype.openConnections = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__connections_connections__["a" /* ConnectionsPage */]);
        modal.present();
    };
    NetworkPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {})
            .then(function () {
            console.log('Welcome to profile');
        });
    };
    NetworkPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], {})
            .then(function () {
            console.log('Welcome to search');
        });
    };
    return NetworkPage;
}());
NetworkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-network',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\network\network.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-avatar>\n          <img class="rounded thumb-xxs b b-white" src="assets/img/hieu.png">\n        </ion-avatar>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar placeholder="Search" (ionFocus)="goToSearch()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <div class="bg-white wrapper-xs m-b-sm">\n    <ion-row text-center class="text-muted">\n      <ion-col class="b-r b-light" (click)="openConnections()">\n        <div class="text-xl font-thin">605</div>\n        <div class="">\n          View connections\n        </div>\n      </ion-col>\n      <ion-col (click)="openConnections()">\n        <ion-icon class="text-2x" name="contact"></ion-icon>\n        <div>\n          Add contacts\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="bg-white m-b-sm">\n    <div class="wrapper b-b b-light">\n      Invitations\n    </div>\n\n    <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1]">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <demo-avatar [sizeClass]="\'thumb\'"></demo-avatar>\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="text-ellipsis-flex">\n        <div class="l-h">\n          <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}}</div>\n          <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n          <div class="text-xs text-muted">\n            <ion-icon name="ios-infinite"></ion-icon>\n            8 mutual connections\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-auto align-self-center>\n        <ion-icon class="text-3x text-muted" name="ios-close-circle-outline"></ion-icon>\n        <ion-icon class="text-3x" name="ios-checkmark-circle-outline" color="primary"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <div class="wrapper text-center font-bold">\n      <div ion-text color="primary">\n        Manage All\n      </div>\n    </div>\n  </div>\n\n  <div class="bg-white m-b-sm">\n    <div class="wrapper b-b b-light">\n      People you may know\n    </div>\n\n    <ion-row text-center>\n      <ion-col col-6 *ngFor="let i of [0,1,2,3,4,5]" class="b-r b-b b-light">\n        <div class="wrapper-sm pos-rlt">\n          <ion-icon name="md-close" color="muted" class="pos-abt top right"></ion-icon>\n          <ion-avatar item-start>\n            <demo-avatar [sizeClass]="\'thumb-md\'"></demo-avatar>\n          </ion-avatar>\n          <div class="l-h m-b-sm">\n            <div class="font-bold">Ryan Reynold {{postIndex}}</div>\n            <div class="text-sm text-muted">VP of Human Resource, SML</div>\n            <div class="text-xxs text-muted">\n              <ion-icon name="ios-infinite"></ion-icon>\n              8 mutual connections\n            </div>\n          </div>\n          <button ion-button outline primary small>\n            <b>Connect</b>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\network\network.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], NetworkPage);

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagePage = (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typingMessage = '';
        this.init();
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage.prototype.init = function () {
        // TODO: can be an API response
        this.messages = [
            {
                isMe: false,
                avatar: 'assets/img/hieu.png',
                type: 'text',
                body: "Hello,\n          I came across your profile and your background looks like it could be a great fit for a fast-growing company like us. So let\u2019s get connected for further discussion.\n\n          Thank you and looking forward to hearing from you!",
                timestamp: 'Oct 10'
            },
            {
                isMe: true,
                type: 'text',
                body: 'Thanks for reaching out. I\'m busy creating Ionic themes..',
                timestamp: 'Oct 11'
            },
            {
                isMe: false,
                avatar: 'assets/img/hieu.png',
                type: 'text',
                body: "Wow, so excited to hear that.\n          We've been waiting for so long.\n          Let's grab some beer some time!\n        ",
                timestamp: 'Oct 12'
            }
        ];
    };
    MessagePage.prototype.sendText = function () {
        this.messages.push({
            isMe: true,
            type: 'text',
            body: this.typingMessage,
            timestamp: 'Oct 14'
        });
        this.typingMessage = '';
        this.scrollBottom();
        this.fakeReply();
        this.focusInput();
    };
    MessagePage.prototype.fakeReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.messages.push({
                isMe: false,
                avatar: 'assets/img/hieu.png',
                type: 'text',
                body: 'Nice. Keep typing, bro!',
                timestamp: 'Oct 14'
            });
            _this.scrollBottom();
        }, 1000);
    };
    MessagePage.prototype.scrollBottom = function () {
        this.content.resize();
        this.content.scrollTo(0, this.content.scrollHeight, 350);
    };
    MessagePage.prototype.focusInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
    };
    return MessagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], MessagePage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", Object)
], MessagePage.prototype, "myInput", void 0);
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-message',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\message\message.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-title>\n      <div>\n        Ryan Renold\n      </div>\n      <div class="text-xxs"><ion-icon name="ios-checkmark-circle" color="secondary"></ion-icon> Online</div>\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content padding>\n  <div class="chat-list">\n    <div class="chat-item" *ngFor="let item of messages" [ngClass]="{\'me\': item.isMe}">\n      <div class="chat-timestamp">\n        {{item.timestamp}}\n      </div>\n\n      <div class="chat-item-content">\n        <div class="chat-avatar" *ngIf="!item.isMe">\n          <img [src]="item.avatar">\n        </div>\n\n        <div class="chat-item-bubble" [ngClass]="{\'bubble-image\': item.type == \'image\'}">\n          <i class="icon-tail"></i>\n          <div class="chat-body" *ngIf="item.type !== \'image\'" [innerHtml]="item.body | nlbr"></div>\n          <img [src]="item.body" *ngIf="item.type == \'image\'">\n        </div>\n\n        <div class="chat-item-reaction" *ngIf="!item.isMe && item.type == \'image\'">\n          <ion-icon name="md-heart-outline" class="text-muted text-2x"></ion-icon>\n        </div>\n      </div>\n\n      <div class="chat-item-status" *ngIf="item.isMe">Sent</div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer [keyboardAttach]="content">\n  <ion-toolbar>\n    <ion-input #input class="m-l-sm" [(ngModel)]="typingMessage" placeholder="Type a message..."></ion-input>\n    <ion-buttons right>\n      <button type="submit" [disabled]="typingMessage.length == 0" ion-button small (click)="sendText(typingMessage)">\n        Send\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\message\message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagingPage = (function () {
    function MessagingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagingPage');
    };
    MessagingPage.prototype.goToMessage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_message__["a" /* MessagePage */], {})
            .then(function () {
            console.log('Welcome to Message');
        });
    };
    MessagingPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {})
            .then(function () {
            console.log('Welcome to profile');
        });
    };
    return MessagingPage;
}());
MessagingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-messaging',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\messaging\messaging.html"*/'<ion-header>\n\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-avatar>\n          <img class="rounded thumb-xxs b b-white" src="assets/img/hieu.png">\n        </ion-avatar>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Messaging</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="white" class="my-toolbar box-shadow">\n    <ion-searchbar placeholder="Search messages"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="has-fab-bottom">\n    <ion-row class="wrapper-sm b-b b-light" (click)="goToMessage()" *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <demo-avatar [sizeClass]="\'thumb\'"></demo-avatar>\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="text-ellipsis-flex">\n        <div class="l-h">\n          <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}}</div>\n          <div class="text-sm text-muted">\n            Hello Hieu, thanks for accepting my invitation. I was wondering...\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-auto>\n        <div class="text-muted text-xs m-t-xs">Oct 14</div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <button ion-fab class="button-fab"><ion-icon name="ios-create"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\messaging\messaging.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], MessagingPage);

//# sourceMappingURL=messaging.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.goToPost = function (postId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__post_post__["a" /* PostPage */], {
            postId: postId
        })
            .then(function () {
            console.log('Welcome to post:', postId);
        });
    };
    NotificationsPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {})
            .then(function () {
            console.log('Welcome to profile');
        });
    };
    NotificationsPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */], {})
            .then(function () {
            console.log('Welcome to search');
        });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\notifications\notifications.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-avatar>\n          <img class="rounded thumb-xxs b b-white" src="assets/img/hieu.png">\n        </ion-avatar>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar placeholder="Search" (ionFocus)="goToSearch()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <ion-row class="bg-white wrapper-sm m-t-sm" *ngFor="let i of [0,1,2,3,4,5,6,7,8]; let postIndex = index" (click)="goToPost(postIndex)">\n    <ion-col col-auto>\n      <ion-avatar item-start>\n        <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n      </ion-avatar>\n      <div class="text-muted text-xs text-center">5h</div>\n    </ion-col>\n    <ion-col class="text-ellipsis-flex">\n      <div class="l-h">\n        <div class="">Congratulate Ryan Reynold <b>for starting a new role as Deadpool at: Deadpool 2</b></div>\n        <div class="text-sm text-muted text-ellipsis">Previously William Hayes</div>\n      </div>\n\n      <div>\n        <button ion-button outline small><b>Say congrats</b></button>\n        <button ion-button clear small icon-left>\n          <ion-icon name="md-thumbs-up"></ion-icon>\n          <b>Like</b>\n        </button>\n      </div>\n    </ion-col>\n    <ion-col col-auto>\n      <ion-icon class="text-2x text-muted" name="more"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsPage = (function () {
    function JobsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobsPage');
    };
    JobsPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {})
            .then(function () {
            console.log('Welcome to profile');
        });
    };
    JobsPage.prototype.goToSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], {})
            .then(function () {
            console.log('Welcome to search');
        });
    };
    return JobsPage;
}());
JobsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-jobs',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\jobs\jobs.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="goToProfile()">\n        <ion-avatar>\n          <img class="rounded thumb-xxs b b-white" src="assets/img/hieu.png">\n        </ion-avatar>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar placeholder="Search jobs" (ionFocus)="goToSearch()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <div class="bg-white wrapper-xs m-b-sm">\n    <ion-row text-center class="text-muted">\n      <ion-col class="b-r b-light" (click)="openConnections()">\n        <div class="wrapper-sm">\n          <b>12</b> Saved jobs\n        </div>\n      </ion-col>\n      <ion-col (click)="openConnections()">\n        <div class="wrapper-sm">\n          <b>8</b> Applied jobs\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="bg-white m-b-sm">\n    <div class="wrapper b-b b-light">\n      <div>Jobs you may be interested in</div>\n      <div ion-text color="primary" class="text-sm">Update career interests</div>\n    </div>\n\n    <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2]; let postIndex = index">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <img class="thumb-sm" src="assets/img/company.png">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="text-ellipsis-flex">\n        <div class="l-h">\n          <div class="font-bold">Web Applications Developer {{postIndex}} (PHP, Javascript, MySQL)</div>\n          <div class="text-sm text-muted text-ellipsis">Marvel Universe Corp</div>\n          <div class="text-xxs text-muted">\n            <ion-icon name="ios-pin-outline"></ion-icon>\n            Singapore\n          </div>\n        </div>\n      </ion-col>\n      <ion-col text-right col-auto>\n        <div class="span text-xs text-muted m-t-xs">2d</div>\n      </ion-col>\n    </ion-row>\n\n    <div class="wrapper text-center font-bold">\n      <div ion-text color="primary">\n        See all\n      </div>\n    </div>\n  </div>\n\n  <div class="bg-white m-b-sm">\n    <div class="wrapper">\n      <div>Jobs searches</div>\n    </div>\n\n    <ion-list class="m-n">\n      <ion-item class="b-none">\n        <ion-icon name="md-bulb" item-start></ion-icon>\n        <h3>\n          Google\n        </h3>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-bulb" item-start></ion-icon>\n        <h3>\n          Facebook\n        </h3>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="md-bulb" item-start></ion-icon>\n        <h3>\n          Pinterest\n        </h3>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="bg-white m-b-sm">\n    <div class="wrapper b-b b-light">\n      <div>Companies in your network</div>\n    </div>\n\n    <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2]; let postIndex = index">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <img class="thumb-sm" src="assets/img/company.png">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class="text-ellipsis-flex">\n        <div class="l-h">\n          <div class="font-bold">Cisco {{postIndex}}</div>\n          <div class="text-sm">Computer Networking</div>\n          <div class="text-xs text-muted">\n            Help recruiters understand what kind of opportunities you’re open to\n          </div>\n        </div>\n        <ion-row>\n          <ion-col col-auto>\n            <ion-avatar item-start>\n              <demo-avatar [sizeClass]="\'thumb-xxxs\'"></demo-avatar>\n            </ion-avatar>\n          </ion-col>\n          <ion-col align-self-center>\n            <div class="text-xs text-muted">2 connections</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\jobs\jobs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], JobsPage);

//# sourceMappingURL=jobs.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.changeBg = false;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToLogin = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { cssClass: 'modal-gradient' });
        modal.present();
    };
    WelcomePage.prototype.goToSignup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { cssClass: 'modal-gradient' });
        modal.present();
    };
    WelcomePage.prototype.slideChanged = function () {
        this.changeBg = this.slides.getActiveIndex() > 0;
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\welcome\welcome.html"*/'<ion-content [ngClass]="{\'bg-gradient\': changeBg}">\n  <div vertical layout fit>\n    <div flex>\n      <ion-slides #slides pager (ionSlideDidChange)="slideChanged()">\n        <ion-slide>\n          <div>\n            <span class="text-2x font-bold"><img class="rounded" src="assets/img/logo.png"></span>          \n          </div>\n          <h3 class="font-thin">\n            EQ-Footprint in your life!\n          </h3>\n        </ion-slide>\n\n        <ion-slide>\n          <h3 class="font-thin color-white">\n            Create your\n            <br>\n            professional profile\n          </h3>\n\n          <div class="wrapper color-black">\n            <div class="bg-white box-shadow">\n              <div class="wrapper b-b b-light">\n                <div class="text-center">\n                  <div class="thumb-lg b b-white">\n                    <img class="rounded" src="assets/img/perry.png">\n                  </div>\n                </div>\n                <h3 class="font-thin">Justin Timberlake</h3>\n                <p class="text-sm">Web Developer at ABC Digital</p>\n                <div class="text-sm text-muted">Somewhere on Mars</div>\n              </div>\n              <div>\n                <button ion-button block clear>Connect</button>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <h3 class="font-thin color-white">\n            Connect and keep\n            <br>\n            in touch with your\n            <br>\n            network\n          </h3>\n\n          <div class="wrapper">\n            <div text-left>\n              <div class="thumb-sm m-b-lg">\n                <img src="assets/img/ben.png" alt="" class="rounded">\n              </div>\n              <div class="inline bg-white wrapper-sm text-sm">\n                Congrats on your new role!\n              </div>\n            </div>\n\n            <div text-right>\n              <div class="inline bg-lighter wrapper-sm text-sm">\n                Thanks, sure!\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <h3 class="font-thin color-white">\n            Find jobs through\n            <br>\n            people you know\n          </h3>\n\n          <div class="wrapper color-black">\n            <div class="bg-white box-shadow">\n              <div class="b-b b-light">\n                <ion-row align-items-center>\n                  <ion-col col-auto>\n                    <div class="thumb b b-white">\n                      <img class="rounded" src="assets/img/max.png">\n                    </div>\n                  </ion-col>\n                  <ion-col text-left>\n                    <div class="text-md">\n                      Kingsman can connect you <br> to 2 jobs\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <div>\n                <ion-list class="m-n" no-lines>\n                  <ion-item>\n                    <ion-icon name="briefcase" item-start></ion-icon>\n                    <h3>\n                      Your next job\n                    </h3>\n                    <p>\n                      You can do it\n                    </p>\n                  </ion-item>\n                  <ion-item>\n                    <ion-icon name="briefcase" item-start></ion-icon>\n                    <h3>\n                      Your next career move\n                    </h3>\n                    <p>\n                      You can do it too\n                    </p>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class="wrapper" *ngIf="!changeBg">\n      <button ion-button primary full (click)="goToSignup()">\n        <b>Join now</b>\n      </button>\n      <button ion-button clear primary full (click)="goToLogin()">\n        <b>Sign in</b>\n      </button>\n    </div>\n\n    <div class="wrapper" *ngIf="changeBg">\n      <button ion-button outline color="light" block (click)="goToSignup()">\n        <b>Join now</b>\n      </button>\n      <button ion-button clear color="light" full (click)="goToLogin()">\n        <b>Sign in</b>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connections/connections.module": [
		312,
		15
	],
	"../pages/home/home.module": [
		311,
		14
	],
	"../pages/jobs/jobs.module": [
		317,
		13
	],
	"../pages/login/login.module": [
		319,
		12
	],
	"../pages/menu/menu.module": [
		321,
		11
	],
	"../pages/message/message.module": [
		314,
		10
	],
	"../pages/messaging/messaging.module": [
		315,
		9
	],
	"../pages/network/network.module": [
		313,
		8
	],
	"../pages/new-post/new-post.module": [
		307,
		7
	],
	"../pages/notifications/notifications.module": [
		316,
		6
	],
	"../pages/post/post.module": [
		306,
		5
	],
	"../pages/profile/profile.module": [
		310,
		4
	],
	"../pages/search/search.module": [
		308,
		3
	],
	"../pages/settings/settings.module": [
		309,
		2
	],
	"../pages/signup/signup.module": [
		318,
		1
	],
	"../pages/welcome/welcome.module": [
		320,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage() {
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\menu\menu.html"*/'<ion-row class="h-full">\n  <ion-col align-self-center>\n    <div class="wrapper-md">\n      <h2 class="font-thin m-b-md">CareersIn Apps</h2>\n\n      <div class="text-muted b-b b-light m-b l-h-2x text-sm">\n        Expand your collection\n      </div>\n\n      <ion-list no-lines>\n        <ion-item>\n          <ion-icon name="briefcase" color="primary" item-start></ion-icon>\n          <h2>Job Search</h2>\n          <p>Find a job you love</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="logo-youtube" color="primary" item-start></ion-icon>\n          <h2>CareersIn Learning</h2>\n          <p>Gain new skills</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="md-contacts" color="primary" item-start></ion-icon>\n          <h2>Slideshare</h2>\n          <p>Master new topics</p>\n        </ion-item>\n      </ion-list>\n\n      <div class="line b-b b-light"></div>\n\n      <div class="l-h">\n        <div>Unlock the power of CareersIn</div>\n        <div class="text-sm" ion-text color="primary">Try Premium for free</div>\n      </div>\n    </div>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_post_post__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_new_post_new_post__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_network_network__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_messaging_messaging__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_jobs_jobs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_search__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_connections_connections__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_message_message__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_message_nlbr_pipe__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























//firebase setup

var firebaseDetails = {
    apiKey: "AIzaSyBYlON53X9qN4AbSDHzGXdTCJYxxM-h6zQ",
    authDomain: "eq-plus.firebaseapp.com",
    databaseURL: "https://eq-plus.firebaseio.com",
    projectId: "eq-plus",
    storageBucket: "eq-plus.appspot.com",
    messagingSenderId: "980114815856"
};
__WEBPACK_IMPORTED_MODULE_29_firebase___default.a.initializeApp(firebaseDetails);
//Camera 

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_post_post__["a" /* PostPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_post_new_post__["a" /* NewPostPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_network_network__["a" /* NetworkPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_messaging_messaging__["a" /* MessagingPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_jobs_jobs__["a" /* JobsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_connections_connections__["a" /* ConnectionsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_message_nlbr_pipe__["a" /* NlbrPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_8__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_elastic__["ElasticModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                mode: 'ios',
                backButtonText: '',
            }, {
                links: [
                    { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-post/new-post.module#NewPostPageModule', name: 'NewPostPage', segment: 'new-post', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/connections/connections.module#ConnectionsPageModule', name: 'ConnectionsPage', segment: 'connections', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/network/network.module#NetworkPageModule', name: 'NetworkPage', segment: 'network', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messaging/messaging.module#MessagingPageModule', name: 'MessagingPage', segment: 'messaging', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_post_post__["a" /* PostPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_new_post_new_post__["a" /* NewPostPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_network_network__["a" /* NetworkPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_messaging_messaging__["a" /* MessagingPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_jobs_jobs__["a" /* JobsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_connections_connections__["a" /* ConnectionsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyboard.disableScroll(true);
            keyboard.hideKeyboardAccessoryBar(true);
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\app\app.html"*/'<ion-menu type="reveal" swipeEnabled="false" side="right" [content]="mainContent">\n  <page-menu></page-menu>\n</ion-menu>\n\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #mainContent main name="app"></ion-nav>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_popover_post_popover__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_attachment_post_attachment__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_avatar_demo_avatar__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__post_popover_post_popover__["a" /* PostPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_3__post_attachment_post_attachment__["a" /* PostAttachmentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__post_popover_post_popover__["a" /* PostPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_3__post_attachment_post_attachment__["a" /* PostAttachmentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__post_popover_post_popover__["a" /* PostPopoverComponent */],
            __WEBPACK_IMPORTED_MODULE_3__post_attachment_post_attachment__["a" /* PostAttachmentComponent */],
            __WEBPACK_IMPORTED_MODULE_4__demo_avatar_demo_avatar__["a" /* DemoAvatarComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAttachmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostAttachmentComponent = (function () {
    function PostAttachmentComponent() {
    }
    return PostAttachmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PostAttachmentComponent.prototype, "type", void 0);
PostAttachmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'post-attachment',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\post-attachment\post-attachment.html"*/'<div [ngSwitch]="type">\n  <div *ngSwitchCase="\'image\'">\n    <img class="w-full" src="assets/img/photo2.png">\n  </div>\n\n  <div *ngSwitchCase="\'url\'">\n    <div class="wrapper-sm">\n      <div class="b b-light">\n        <div class="wrapper-sm l-h">\n          Today, we celebrate our new milestone of 1,000,000 sales world wide. I want to say thanks to all of my partners and friends.\n        </div>\n        <img class="w-full" src="assets/img/photo1.png">\n        <ion-row class="padder-sm">\n          <ion-col class="l-h">\n            <div class="font-bold">Homepage</div>\n            <div class="text-xs text-muted">homepage.com</div>\n          </ion-col>\n          <ion-col ion-auto text-right>\n            <ion-icon class="text-2x text-muted" name="ios-bookmark-outline"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\post-attachment\post-attachment.html"*/
    }),
    __metadata("design:paramtypes", [])
], PostAttachmentComponent);

//# sourceMappingURL=post-attachment.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DemoAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DemoAvatarComponent = (function () {
    function DemoAvatarComponent() {
        this.sizeClass = 'thumb'; // Can be 'thumb-xs'-'thumb-sm'-'thumb-md'-'thumb-lg'
        this.images = [
            'adam.png',
            'ben.png',
            'hieu.png',
            'max.png',
            'mike.png',
            'perry.png'
        ];
        var randomIndex = Math.floor(Math.random() * (this.images.length - 1));
        this.imageUrl = "assets/img/" + this.images[randomIndex];
    }
    return DemoAvatarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DemoAvatarComponent.prototype, "sizeClass", void 0);
DemoAvatarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'demo-avatar',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\demo-avatar\demo-avatar.html"*/'<img class="rounded" [ngClass]="sizeClass" [src]="imageUrl">\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\demo-avatar\demo-avatar.html"*/
    }),
    __metadata("design:paramtypes", [])
], DemoAvatarComponent);

//# sourceMappingURL=demo-avatar.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.changeImg = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 1000,
            targetHeight: 1000,
        };
        this.camera.getPicture(options).then(function (ImageData) {
            var base64Image = 'data:image/jpeg;base64,' + ImageData;
            var r = Math.random();
            var imageName = ['camerar', r].join('_');
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/images').child(imageName).putString(ImageData, 'base64', { contentType: 'image/png' }).then(function (res) {
                var user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
                var imagePath = res.downloadURL;
                __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users').orderByChild('ID').equalTo(user.uid).once('value', function (resData) {
                    var key = Object.keys(resData.val());
                    __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref().child('/users/' + key)
                        .update({ img: imagePath });
                });
            });
        }, function (err) {
            alert("error" + JSON.stringify(err));
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */])
            .then(function () {
            console.log('Welcome to Settings');
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToSettings()">\n        <ion-icon name="ios-settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-muted">\n  <div class="wrapper-sm has-fab-bottom">\n    <div class="profile-cover" [style.backgroundImage]="\'url(assets/img/photo2.png)\'"></div>\n\n    <div class="bg-white wrapper text-center has-avatar-raised m-b-sm">\n      <ion-avatar class="avatar-raised">\n        <demo-avatar [sizeClass]="\'thumb-xl b-white b b-3x box-shadow\'" (click)="changeImg()"></demo-avatar>\n      </ion-avatar>\n\n      <div class="l-h m-b">\n        <div class="text-lg">Hieu Pham</div>\n        <div class="">Internet Product Lover</div>\n        <div class="text-muted text-xs">Singapore · 500+ <ion-icon name="md-people"></ion-icon></div>\n      </div>\n\n      <div class="text-sm">I\'m a UI/UX lover. I see nice UI, I clone. <br/>That\'s it.</div>\n    </div>\n\n    <div class="bg-primary-lighter wrapper-sm m-b-sm">\n      <div class="color-white">\n        <ion-row>\n          <ion-col>\n            <div class="text-md">Your dashboard</div>\n            <div class="text-xs"><i>Private to you</i></div>\n          </ion-col>\n          <ion-col col-auto align-self-center>\n            <div class="font-bold text-sm">\n              <ion-icon name="md-star-outline"></ion-icon>\n              ALL-STAR\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row class="r bg-white m-b-sm">\n        <ion-col class="b-r b-light wrapper-sm">\n          <div ion-text color="primary" class="text-lg">\n            38\n          </div>\n          <div class="text-xxs text-muted">\n            Who viewed your profile\n          </div>\n        </ion-col>\n        <ion-col class="b-r b-light wrapper-sm">\n          <div ion-text color="primary" class="text-lg">\n            146\n          </div>\n          <div class="text-xxs text-muted">\n            Who viewed your profile\n          </div>\n        </ion-col>\n        <ion-col class="wrapper-sm">\n          <div ion-text color="primary" class="text-lg">\n            38\n          </div>\n          <div class="text-xxs text-muted">\n            Who viewed your profile\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class="bg-white r">\n        <ion-row class="b-b b-light wrapper-sm">\n          <ion-col col-auto>\n            <ion-icon name="ios-briefcase-outline"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <div class="font-bold">\n              Career interests\n            </div>\n            <div class="text-muted text-xs">\n              Connect with recuiters and relevant opportunities\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="b-b b-light wrapper-sm">\n          <ion-col col-auto>\n            <ion-icon name="ios-briefcase-outline"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <div class="font-bold">\n              Saved items (1)\n            </div>\n            <div class="text-muted text-xs">\n              Save interesting articles and jobs for later\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div>Your articles</div>\n        <div class="text-xs text-muted">\n          605 Followers\n        </div>\n      </div>\n\n      <post-attachment type="url"></post-attachment>\n\n      <div class="line b-b b-light"></div>\n\n      <div class="wrapper-sm b-b b-light">\n        <div class="m-b">Activity</div>\n\n        <ion-row *ngFor="let i of [0,1]">\n          <ion-col col-auto>\n            <ion-avatar>\n              <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <div class="font-bold">Something cool in the industry but nobody cares</div>\n            <div class="text-muted text-xs">Hieu likes this</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class="wrapper text-center font-bold">\n        <div ion-text color="primary">\n          See more\n        </div>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div class="m-b">Experience</div>\n      </div>\n\n      <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2]; let postIndex = index">\n        <ion-col col-auto>\n          <ion-avatar item-start>\n            <img class="thumb-sm" src="assets/img/company.png">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class="text-ellipsis-flex">\n          <div class="l-h">\n            <div class="font-bold">UI/UX lover</div>\n            <div class="text-sm text-muted text-ellipsis">Marvel Universe Corp</div>\n            <div class="text-xxs text-muted">\n              Dec 2013 - Present · 4yrs 1 mo\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class="wrapper-sm">\n        <div class="m-b">Education</div>\n      </div>\n\n      <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1]; let postIndex = index">\n        <ion-col col-auto>\n          <ion-avatar item-start>\n            <img class="thumb-sm" src="assets/img/company.png">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class="text-ellipsis-flex">\n          <div class="l-h">\n            <div class="font-bold">X Gifted Highschool</div>\n            <div class="text-sm text-muted text-ellipsis">Mutants Researcher</div>\n            <div class="text-xxs text-muted">\n              2006 - 2011\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class="wrapper text-center font-bold">\n        <div ion-text color="primary">\n          See more\n        </div>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div>Featured Skills & Endorsements</div>\n      </div>\n\n      <div class="wrapper-sm m-b-sm" *ngFor="let i of [0,1]">\n        <ion-chip>\n          <ion-label class="text-xs">\n            <div class="font-bold">Javascript <span class="text-muted"> · 25</span></div>\n          </ion-label>\n        </ion-chip>\n        <ion-row>\n          <ion-col col-auto>\n            <ion-avatar item-start>\n              <demo-avatar [sizeClass]="\'thumb-xxxs\'"></demo-avatar>\n            </ion-avatar>\n          </ion-col>\n          <ion-col align-self-center>\n            <div class="text-xs text-muted">Endorsed by Wolverines, Mystique</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-auto>\n            <ion-avatar item-start>\n              <demo-avatar [sizeClass]="\'thumb-xxxs\'"></demo-avatar>\n            </ion-avatar>\n          </ion-col>\n          <ion-col align-self-center>\n            <div class="text-xs text-muted">Endorsed by 2 of your colleagues</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class="wrapper text-center font-bold">\n        <div ion-text color="primary">\n          See 5 more skills\n        </div>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div>Accomplishments</div>\n      </div>\n\n      <div class="b-b b-light">\n        <ion-row>\n          <ion-col col-auto>\n            <div class="text-2x font-thin" ion-text color="primary">\n              <div class="padder-sm">9</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class="text-u-c font-bold m-b-xs" ion-text color="primary">\n              <span class="b-b b-light">PROJECTS</span>\n            </div>\n            <div class="text-sm text-muted">One of the most awesome company</div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-auto>\n            <div class="text-2x font-thin" ion-text color="primary">\n              <div class="padder-sm">2</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class="text-u-c font-bold m-b-xs" ion-text color="primary">\n              <span class="b-b b-light">CERTIFICATIONS</span>\n            </div>\n            <div class="text-sm text-muted">Duolingo French Fluency: Advanced (Estimated)</div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-auto>\n            <div class="text-2x font-thin" ion-text color="primary">\n              <div class="padder-sm">1</div>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class="text-u-c font-bold m-b-xs" ion-text color="primary">\n              <span class="b-b b-light">PUBLICATIONS</span>\n            </div>\n            <div class="text-sm text-muted">[Book translation] Digital Nomad</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class="wrapper text-center font-bold">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div>Hieu is available for...</div>\n      </div>\n\n      <ion-list class="m-n">\n        <ion-item class="b-none">\n          <ion-icon name="ios-chatbubbles-outline" color="primary" item-start></ion-icon>\n          <h3>\n            Getting coffee\n          </h3>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="empty" item-start></ion-icon>\n          <h3>\n            Contracting and freelancing\n          </h3>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="empty" item-start></ion-icon>\n          <h3>\n            Paid consulting\n          </h3>\n        </ion-item>\n      </ion-list>\n\n      <div class="wrapper-sm">\n        <div>Contact</div>\n      </div>\n\n      <ion-list class="m-n">\n        <ion-item class="b-none">\n          <ion-icon name="logo-linkedin" item-start></ion-icon>\n          <h3>\n            <div class="font-bold">Getting coffee</div>\n          </h3>\n          <p>linkedin.com/in/hieupv</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="md-mail" item-start></ion-icon>\n          <h3>\n            <div class="font-bold">Email</div>\n          </h3>\n          <p>mr_hie@yahoo.com</p>\n        </ion-item>\n        <ion-item>\n          <ion-icon name="ios-chatboxes" item-start></ion-icon>\n          <h3>\n            <div class="font-bold">IM</div>\n          </h3>\n          <p>Mr_hie (Skype)</p>\n        </ion-item>\n      </ion-list>\n\n      <div class="wrapper text-center font-bold">\n        <div ion-text color="primary">\n          See more\n        </div>\n      </div>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="wrapper-sm">\n        <div>Interests</div>\n      </div>\n      <div class="wrapper-sm b-b b-light">\n        <ion-avatar class="inline m-r-sm" *ngFor="let i of [0,1,2,3,4]">\n          <img class="thumb-sm" src="assets/img/company.png">\n        </ion-avatar>\n      </div>\n      <div class="wrapper text-center font-bold">\n        <div ion-text color="primary">\n          See more\n        </div>\n      </div>\n    </div>\n\n    <div class="bg-primary-darker m-b-sm color-white">\n      <div class="wrapper-sm text-center">\n        <div>People Also Viewed</div>\n      </div>\n\n      <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n        <ion-col col-auto>\n          <ion-avatar item-start>\n            <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class="text-ellipsis-flex">\n          <div class="l-h">\n            <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}} <span class="text-muted font-normal">· 1st</span></div>\n            <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n            <div class="text-xxs text-muted">\n              <ion-icon name="ios-pin-outline"></ion-icon>\n              Hanoi, Vietnam\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-auto align-self-center>\n          <ion-icon class="text-lg text-muted" name="ios-chatboxes-outline"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n  <button ion-fab class="button-fab"><ion-icon name="ios-add"></ion-icon></button>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/*
  Source: https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @source https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.keyboard.disableScroll(true);
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.keyboard.disableScroll(true);
        }
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
    };
    return KeyboardAttachDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
KeyboardAttachDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[keyboardAttach]' // Attribute selector
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlbrPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Replace newline characters with HTML <br>
 * Simpler solution: using CSS white-space: pre
*/
var NlbrPipe = (function () {
    function NlbrPipe() {
    }
    NlbrPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.replace(/\n/ig, '<br>');
    };
    return NlbrPipe;
}());
NlbrPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'nlbr'
    })
], NlbrPipe);

//# sourceMappingURL=nlbr.pipe.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_post__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showResult = false;
        this.activeSegment = '0';
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.toggleResult = function (value) {
        if (value === void 0) { value = true; }
        this.showResult = value;
        this.content.resize();
    };
    SearchPage.prototype.goToPost = function (postId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__post_post__["a" /* PostPage */], {
            postId: postId
        })
            .then(function () {
            console.log('Welcome to post:', postId);
        });
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], SearchPage.prototype, "content", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-searchbar placeholder="Search"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button (click)="toggleResult(false)">\n        Cancel\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar *ngIf="showResult" color="white" class="my-toolbar no-padder">\n    <ion-scroll scrollX="true">\n      <ion-segment mode="md" [(ngModel)]="activeSegment">\n        <ion-segment-button value="0">\n          All\n        </ion-segment-button>\n        <ion-segment-button value="1">\n          People\n        </ion-segment-button>\n        <ion-segment-button value="2">\n          Jobs\n        </ion-segment-button>\n        <ion-segment-button value="3">\n          Content\n        </ion-segment-button>\n        <ion-segment-button value="4">\n          Companies\n        </ion-segment-button>\n      </ion-segment>\n    </ion-scroll>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content class="bg-muted">\n  <!-- INITIAL SEARCH PAGE -->\n  <div *ngIf="!showResult">\n    <div class="wrapper bg-white m-b-sm">\n      <div class="font-bold m-b">Search for</div>\n      <ion-row>\n        <ion-col text-center>\n          <div class="search-shortcut" (click)="toggleResult(true)">\n            <ion-icon name="ios-people-outline"></ion-icon>\n          </div>\n          <div class="text-muted text-sm">People</div>\n        </ion-col>\n        <ion-col text-center>\n          <div class="search-shortcut" (click)="toggleResult(true)">\n            <ion-icon name="ios-briefcase-outline"></ion-icon>\n          </div>\n          <div class="text-muted text-sm">Jobs</div>\n        </ion-col>\n        <ion-col text-center>\n          <div class="search-shortcut" (click)="toggleResult(true)">\n            <ion-icon name="ios-copy-outline"></ion-icon>\n          </div>\n          <div class="text-muted text-sm">Posts</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="bg-white m-b-sm">\n      <div class="font-bold wrapper">Recent searches</div>\n\n      <ion-list no-lines>\n        <ion-item *ngFor="let i of [0,1,2,3,4]; let index = index">\n          <ion-avatar item-start>\n            <demo-avatar></demo-avatar>\n          </ion-avatar>\n          <h3>Metalic Ionas ({{index + 1}})</h3>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <!-- SEARCH RESULT -->\n  <div class="bg-white" *ngIf="showResult">\n    <!-- ALL or PEOPLE -->\n    <div *ngIf="activeSegment == 0 || activeSegment == 1">\n      <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2,3,4,5,6,7,8]">\n        <ion-col col-auto>\n          <ion-avatar item-start>\n            <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n          </ion-avatar>\n        </ion-col>\n        <ion-col class="text-ellipsis-flex">\n          <div class="l-h">\n            <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}} <span class="text-muted font-normal">· 1st</span></div>\n            <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n            <div class="text-xxs text-muted">\n              <ion-icon name="ios-pin-outline"></ion-icon>\n              Hanoi, Vietnam\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-auto align-self-center>\n          <ion-icon class="text-lg text-muted" name="ios-chatboxes-outline"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- JOBS -->\n    <div *ngIf="activeSegment == 2 || activeSegment == 4">\n      <ion-row class="wrapper-sm b-b b-light" *ngFor="let i of [0,1,2,3,4,5,6,7,8]; let postIndex = index">\n        <ion-col col-auto>\n          <ion-avatar item-start>\n            <img class="thumb-sm" src="assets/img/company.png">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class="text-ellipsis-flex">\n          <div class="l-h">\n            <div class="font-bold text-ellipsis">Senior UI/UX Designer {{postIndex}}</div>\n            <div class="text-sm text-muted text-ellipsis">Marvel Universe Corp</div>\n            <div class="text-xxs text-muted">\n              <ion-icon name="ios-pin-outline"></ion-icon>\n              Hanoi, Vietnam\n            </div>\n          </div>\n        </ion-col>\n        <ion-col text-right col-auto align-self-center>\n          <ion-icon class="text-lg text-muted" name="ios-bookmark-outline"></ion-icon>\n          <div class="span text-xs text-muted m-t">2d</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="bg-muted" *ngIf="activeSegment == 3">\n      <div class="m-t-sm bg-white" *ngFor="let i of [0,1,2,3,4,5]; let postIndex = index" (click)="goToPost(postIndex)">\n        <ion-row class="wrapper-sm">\n          <ion-col col-auto>\n            <ion-avatar item-start>\n              <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class="text-ellipsis-flex">\n            <div class="l-h">\n              <div class="font-bold text-ellipsis">Ryan Reynold {{postIndex}}</div>\n              <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n              <div class="text-sm text-muted">2d · Edited</div>\n            </div>\n          </ion-col>\n          <ion-col col-auto>\n            <ion-icon class="text-2x text-muted" name="more" (click)="presentPopover($event)"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <div class="post-caption padder m-b-sm pos-rlt l-h">\n          The site has an Alexa Internet ranking as the 20th most popular website (October 2016). Based in the United States, the site is, as of 2013, available in 24 languages,[11] including Arabic, Chinese, English, French\n          <span class="pos-abt bottom right text-muted padder bg-white">...see more</span>\n        </div>\n\n        <post-attachment type="{{postIndex % 2 == 1 ? \'url\' : \'image\'}}"></post-attachment>\n\n        <div class="padder m-b-sm">\n          <div class="b-b b-light">\n            <div class="m-t-sm m-b-sm">\n              6 Likes · 24 Comments\n            </div>\n          </div>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small color="muted">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>Like</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small color="muted">\n              <ion-icon name="text"></ion-icon>\n              <div>Comment</div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <button ion-button icon-left clear small color="muted">\n              <ion-icon name="share"></ion-icon>\n              <div>Share</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_post_popover_post_popover__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostPage = (function () {
    function PostPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
        this.postId = this.navParams.get('postId');
        this.postType = this.postId % 2 == 1 ? 'url' : 'image';
    };
    PostPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_post_popover_post_popover__["a" /* PostPopoverComponent */], {}, {
            cssClass: 'my-popover'
        });
        popover.present({
            ev: event
        });
    };
    return PostPage;
}());
PostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-post',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\post\post.html"*/'<ion-header>\n\n  <ion-navbar color="primary" no-border-bottom>\n    <ion-title>Post</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="wrapper-sm">\n    <ion-col col-auto>\n      <ion-avatar item-start>\n        <img class="rounded thumb-sm" src="assets/img/adam.png">\n      </ion-avatar>\n    </ion-col>\n    <ion-col class="text-ellipsis-flex">\n      <div class="l-h">\n        <div class="font-bold text-ellipsis">Ryan Reynold {{postId}}</div>\n        <div class="text-sm text-muted text-ellipsis">VP of Human Resource, SML</div>\n        <div class="text-sm text-muted">2d · Edited</div>\n      </div>\n    </ion-col>\n    <ion-col col-auto>\n      <button ion-button clear small icon-start class="no-padder">\n        <ion-icon name="md-add"></ion-icon>\n        Follow\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div class="post-caption padder m-b-sm pos-rlt l-h">\n    The site has an Alexa Internet ranking as the 20th most popular website (October 2016). Based in the United States, the site is, as of 2013, available in 24 languages,[11] including Arabic, Chinese, English, French\n  </div>\n\n  <post-attachment type="{{this.postType}}"></post-attachment>\n\n  <div class="padder m-b-sm">\n    <div class="b-b b-light">\n      <div class="m-t-sm m-b-sm">\n        6 Likes · 24 Comments\n      </div>\n    </div>\n  </div>\n\n  <ion-row class="b-b b-light">\n    <ion-col>\n      <button ion-button icon-left clear small color="muted">\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>Like</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small color="muted">\n        <ion-icon name="text"></ion-icon>\n        <div>Comment</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <button ion-button icon-left clear small color="muted">\n        <ion-icon name="share"></ion-icon>\n        <div>Share</div>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div class="wrapper">\n    <div class="text-md m-b-sm">Likes</div>\n    <ion-row>\n      <ion-col col-auto *ngFor="let i of [0,1,2,3]">\n        <ion-avatar>\n          <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-auto>\n        <div class="avatar-more">\n          <ion-icon name="more"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div>\n    <div class="text-md m-b-sm b-b b-light wrapper-sm padder">Comments</div>\n    <ion-row class="wrapper-sm">\n      <ion-col col-auto>\n        <ion-avatar item-start>\n          <demo-avatar [sizeClass]="\'thumb-sm\'"></demo-avatar>\n        </ion-avatar>\n      </ion-col>\n\n      <ion-col>\n        <div class="l-h m-b-sm">\n          <div class="font-bold text-ellipsis text-sm">John Lemon</div>\n          <div class="text-xs text-muted text-ellipsis">VP of Human Resource, SML</div>\n          <div class="text-xs text-muted">2d · Edited</div>\n        </div>\n\n        <div class="text-sm l-h">\n          The site has an Alexa Internet ranking as the 20th most popular website (October 2016). Based in the United States, the site is, as of 2013, available in 24 languages,[11] including Arabic, Chinese, English, French\n        </div>\n\n        <ion-row class="b-b b-light">\n          <ion-col col-auto>\n            <div class="inline m-r">\n              <button ion-button icon-left clear small color="muted" class="no-padder text-xxs">\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>Like</div>\n              </button>\n            </div>\n            <div class="inline">\n              <button ion-button icon-left clear small color="muted" class="no-padder text-xxs">\n                <ion-icon name="text"></ion-icon>\n                <div>Reply</div>\n              </button>\n            </div>\n          </ion-col>\n          <ion-col align-self-center>\n            <div class="b-l b-light">\n              <div class="text-xxs text-muted m-l">\n                2 Likes · 3 Reply\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- REPLY -->\n        <ion-row class="wrapper-sm">\n          <ion-col col-auto>\n            <ion-avatar item-start>\n              <img class="rounded thumb-xxs" src="assets/img/adam.png">\n            </ion-avatar>\n          </ion-col>\n          <ion-col>\n            <div class="l-h m-b-sm">\n              <div class="font-bold text-ellipsis text-sm">Ryan Reynold {{postId}} <span class="user-label">Author</span></div>\n              <div class="text-xs text-muted text-ellipsis">VP of Human Resource, SML</div>\n              <div class="text-xs text-muted">2d · Edited</div>\n            </div>\n\n            <div class="text-sm l-h">\n              Totally agree, man!\n            </div>\n\n            <ion-row class="b-b b-light">\n              <ion-col col-auto>\n                <div class="inline m-r">\n                  <button ion-button icon-left clear small color="muted" class="no-padder text-xxs">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>Like</div>\n                  </button>\n                </div>\n                <div class="inline">\n                  <button ion-button icon-left clear small color="muted" class="no-padder text-xxs">\n                    <ion-icon name="text"></ion-icon>\n                    <div>Reply</div>\n                  </button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\post\post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
], PostPage);

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.userDetails = {
            ID: '',
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.signUp = function (signUpData) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().createUserWithEmailAndPassword(signUpData.email, signUpData.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users').push({
                                ID: result.uid,
                                firstname: signUpData.firstname,
                                lastname: signUpData.lastname,
                                status: 0
                            });
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */])
                                .then(function () {
                                console.log('Welcome to your News Feed!');
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.goToLogin = function () {
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {}, { cssClass: 'modal-gradient' });
        modal.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\signup\signup.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="form-login">\n    <ion-item class="b-b b-light">\n      <ion-input type="text" placeholder="First name" [(ngModel)]="userDetails.firstname"></ion-input>\n    </ion-item>\n\n    <ion-item class="b-b b-light">\n      <ion-input type="text" placeholder="Last name" [(ngModel)]="userDetails.lastname"></ion-input>\n    </ion-item>\n\n    <ion-item class="b-b b-light">\n      <ion-input type="text" placeholder="Email" [(ngModel)]="userDetails.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="userDetails.password"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div class="wrapper color-white" text-center>\n    By clicking Join now, you agree to LinkedIn\'s User Agreement, Privacy Policy and Cookie Policy\n  </div>\n\n  <div class="padder">\n    <button ion-button block outline color="light" (click)="signUp(userDetails)">\n      <b>Sign Up</b>\n    </button>\n\n    <div class="wrapper-sm">\n      <button ion-button block clear color="light" (click)="goToLogin()">\n        Already have an account? Sign in\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = (function () {
    function LoginPage(alertData, navCtrl, navParams, viewCtrl, modalCtrl, loadingCtrl) {
        this.alertData = alertData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var loading, result, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            content: 'loading..'
                        });
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            loading.dismiss();
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).then(function () {
                                console.log('Welcome to your News Feed!');
                            });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert_1 = this.alertData.create({
                            title: 'Either username or password is incorrect',
                            buttons: ['ok']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.changePassword = function () {
        var _this = this;
        var prompt = this.alertData.create({
            title: "Enter your Email",
            message: "A new password will be emailed to your Email",
            inputs: [{
                    name: 'email',
                    placeholder: 'Enter your email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel Clicked');
                    }
                },
                {
                    text: 'submit',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            content: 'Reseting your Password..'
                        });
                        loading.present();
                        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().sendPasswordResetEmail(data.email).then(function () {
                            loading.dismiss().then(function () {
                                var successPrint = _this.alertData.create({
                                    title: 'Please check your email',
                                    subTitle: 'Password reset successfully',
                                    buttons: ['Ok']
                                });
                                successPrint.present();
                            });
                        }, function (error) {
                            var errorPrint = _this.alertData.create({
                                title: 'Error to reseting your password',
                                subTitle: error.message,
                                buttons: ['Ok']
                            });
                            errorPrint.present();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.goToSignup = function () {
        this.viewCtrl.dismiss();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { cssClass: 'modal-gradient' });
        modal.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\login\login.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-buttons end>\n      <button ion-button color="light" (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="form-login">\n    <ion-item class="b-b b-light">\n      <ion-input type="text" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"  [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <div class="padder">\n    <button ion-button block outline color="light" (click)="login(user)">\n      <b>Sign in</b>\n    </button>\n  </div>\n\n  <ion-row class="color-white m-t">\n    <ion-col>\n      <button ion-button clear color="light" small (click)="changePassword()">\n        Forgot password?\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button clear color="light" small (click)="goToSignup()">\n        Join now\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PostPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PostPopoverComponent = (function () {
    function PostPopoverComponent() {
    }
    return PostPopoverComponent;
}());
PostPopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'post-popover',template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\post-popover\post-popover.html"*/'<ion-list class="m-b-none">\n  <ion-item>\n    <ion-icon name="share" item-start></ion-icon>\n    <h3>Share via</h3>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="close-circle" item-start></ion-icon>\n    <h3>Hide this post</h3>\n    <div class="text-sm text-muted">I don\'t want to see this post in my feed</div>\n  </ion-item>\n  <ion-item>\n    <ion-icon name="flag" item-start></ion-icon>\n    <h3>Report this post</h3>\n    <div class="text-sm text-muted">This post is offensive or the account is hacked</div>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\components\post-popover\post-popover.html"*/
    }),
    __metadata("design:paramtypes", [])
], PostPopoverComponent);

//# sourceMappingURL=post-popover.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_network__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messaging_messaging__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_jobs__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__network_network__["a" /* NetworkPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messaging_messaging__["a" /* MessagingPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__jobs_jobs__["a" /* JobsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\tabs\tabs.html"*/'<ion-tabs class="my-tabs">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Network" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Messaging" tabIcon="chatboxes" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Notifications" tabIcon="notifications" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Jobs" tabIcon="briefcase"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\eq\ionicMarket-ionic-linkedin\ionicMarket-ionic-linkedin\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map