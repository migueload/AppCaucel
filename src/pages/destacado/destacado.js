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
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { DirectoriodetallePage } from '../directoriodetalle/directoriodetalle';
import { AnunciogpsPage } from '../anunciogps/anunciogps';
var DestacadoPage = /** @class */ (function () {
    function DestacadoPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
        this.initializeItems();
    }
    DestacadoPage.prototype.initializeItems = function () {
        this.items = this.destacados;
    };
    DestacadoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.getAnuncioDestacados()
            .subscribe(function (data) {
            _this.destacados = data;
        }, function (error) {
            console.error(error);
        });
    };
    DestacadoPage.prototype.irDirectorioDetalle = function (item) {
        this.navCtrl.push(DirectoriodetallePage, { item: item });
    };
    DestacadoPage.prototype.irAnuncioGps = function (item) {
        this.navCtrl.push(AnunciogpsPage, { item: item });
    };
    // ***************************Compartir
    DestacadoPage.prototype.share = function (item) {
        /*this.file="http://api.caucelpublicidad.com/assets/img/anuncio/"+item.imagen;
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
        .then(()=>{
        }).catch(()=>{
        });*/
    };
    DestacadoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-destacado',
            templateUrl: 'destacado.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Proveedor1Provider])
    ], DestacadoPage);
    return DestacadoPage;
}());
export { DestacadoPage };
//# sourceMappingURL=destacado.js.map