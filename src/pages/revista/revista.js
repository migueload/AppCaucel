var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
var RevistaPage = /** @class */ (function () {
    //codigo para abrir web viewer
    function RevistaPage(iab, navCtrl, navParams) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RevistaPage.prototype.irRevista1 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel01.html', '_self');
    };
    RevistaPage.prototype.irRevista2 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel02.html', '_self');
    };
    RevistaPage.prototype.irRevista3 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel03.html', '_self');
    };
    RevistaPage.prototype.irRevista4 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel04.html', '_self');
    };
    RevistaPage.prototype.irRevista5 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel05.html', '_self');
    };
    RevistaPage.prototype.irRevista6 = function () {
        this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel06.html', '_self');
    };
    RevistaPage.prototype.ionViewDidLoad = function () { };
    RevistaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-revista',
            templateUrl: 'revista.html',
        }),
        __metadata("design:paramtypes", [InAppBrowser, NavController, NavParams])
    ], RevistaPage);
    return RevistaPage;
}());
export { RevistaPage };
//# sourceMappingURL=revista.js.map