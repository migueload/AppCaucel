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
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
var AnunciatePage = /** @class */ (function () {
    function AnunciatePage(navCtrl, alertCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.httpClient = httpClient;
        this.datos = {};
    }
    AnunciatePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Registro de Anunciante',
            subTitle: 'El mensaje se guardo exitosamente!',
            buttons: ['Aceptar']
        });
        alert.present();
    };
    AnunciatePage.prototype.guardarAnunciante = function () {
        this.showAlert();
        this.httpClient.post('http://api.caucelpublicidad.com/insert.php', JSON.stringify(this.datos))
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.navCtrl.setRoot(HomePage);
    };
    AnunciatePage.prototype.ionViewDidLoad = function () {
    };
    AnunciatePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-anunciate',
            templateUrl: 'anunciate.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AlertController,
            HttpClient])
    ], AnunciatePage);
    return AnunciatePage;
}());
export { AnunciatePage };
//# sourceMappingURL=anunciate.js.map