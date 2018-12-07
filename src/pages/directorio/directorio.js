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
import { DirectoriodetallePage } from '../directoriodetalle/directoriodetalle';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
var DirectorioPage = /** @class */ (function () {
    function DirectorioPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
        this.initializeItems();
    }
    DirectorioPage.prototype.initializeItems = function () {
        this.items = this.anuncios;
    };
    DirectorioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.proveedor.getAllAnuncio()
            .subscribe(function (data) {
            _this.anuncios = data;
        }, function (error) {
            console.error(error);
        });
    };
    DirectorioPage.prototype.irDirectorioDetalle = function (item) {
        this.navCtrl.push(DirectoriodetallePage, { item: item });
    };
    DirectorioPage.prototype.filtrarAnuncios = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DirectorioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-directorio',
            templateUrl: 'directorio.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Proveedor1Provider])
    ], DirectorioPage);
    return DirectorioPage;
}());
export { DirectorioPage };
//# sourceMappingURL=directorio.js.map