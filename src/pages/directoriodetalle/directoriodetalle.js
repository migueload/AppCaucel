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
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { AnunciogpsPage } from '../anunciogps/anunciogps';
var DirectoriodetallePage = /** @class */ (function () {
    function DirectoriodetallePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.anuncio = navParams.data.item;
    }
    DirectoriodetallePage.prototype.ocultar = function () {
        if (this.anuncio.categoria == "ALIMENTOS Y BARES") {
            return true;
        }
        else {
            return false;
        }
    };
    DirectoriodetallePage.prototype.ionViewDidLoad = function () {
    };
    DirectoriodetallePage.prototype.guardarEstadisticas = function () {
        this.http.post('http://api.caucelpublicidad.com/guardarestadisticas.php', JSON.stringify(this.anuncio))
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.navCtrl.setRoot(HomePage);
    };
    DirectoriodetallePage.prototype.irAnuncioGps = function (item) {
        this.navCtrl.push(AnunciogpsPage, { item: item });
    };
    DirectoriodetallePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-directoriodetalle',
            templateUrl: 'directoriodetalle.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient])
    ], DirectoriodetallePage);
    return DirectoriodetallePage;
}());
export { DirectoriodetallePage };
//# sourceMappingURL=directoriodetalle.js.map