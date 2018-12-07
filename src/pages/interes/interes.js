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
var InteresPage = /** @class */ (function () {
    function InteresPage(navCtrl, navParams, proveedor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proveedor = proveedor;
    }
    InteresPage.prototype.ionViewDidLoad = function () {
        //Articulos
        var _this = this;
        this.proveedor.getAllArticulo()
            .subscribe(function (data) {
            _this.articulos = data;
        }, function (error) {
            console.error(error);
        });
    };
    InteresPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-interes',
            templateUrl: 'interes.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Proveedor1Provider])
    ], InteresPage);
    return InteresPage;
}());
export { InteresPage };
//# sourceMappingURL=interes.js.map