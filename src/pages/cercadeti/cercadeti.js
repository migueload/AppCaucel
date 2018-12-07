var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
var CercadetiPage = /** @class */ (function () {
    function CercadetiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CercadetiPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    // Geolocalizacion 	
    CercadetiPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(21.0150679, -89.70451109999999);
        var options = {
            center: location,
            zoom: 15,
            streetViewControl: false,
            mapTypeId: 'terrain'
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    CercadetiPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], CercadetiPage.prototype, "mapRef", void 0);
    CercadetiPage = __decorate([
        Component({
            selector: 'page-cercadeti',
            templateUrl: 'cercadeti.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], CercadetiPage);
    return CercadetiPage;
}());
export { CercadetiPage };
//# sourceMappingURL=cercadeti.js.map