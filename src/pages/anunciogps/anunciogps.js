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
import { NavParams } from 'ionic-angular';
var AnunciogpsPage = /** @class */ (function () {
    function AnunciogpsPage(navParams) {
        this.navParams = navParams;
        this.lat = null;
        this.long = null;
        //console.log(navParams.data.item.longitud);
        //console.log(navParams.data.item.latitud);
        this.setLong(navParams.data.item.longitud);
        this.setLat(navParams.data.item.latitud);
    }
    //******************Getters y Setters******************
    AnunciogpsPage.prototype.setLong = function (ln) {
        this.long = ln;
    };
    AnunciogpsPage.prototype.getLong = function () {
        return this.long;
    };
    AnunciogpsPage.prototype.setLat = function (lt) {
        this.lat = lt;
    };
    AnunciogpsPage.prototype.getLat = function () {
        return this.lat;
    };
    //*****************************************************
    AnunciogpsPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    //*********** Geolocalizacion  
    AnunciogpsPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(this.getLat(), this.getLong());
        var options = {
            center: location,
            zoom: 15,
            streetViewControl: false,
            mapTypeId: 'terrain'
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    AnunciogpsPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], AnunciogpsPage.prototype, "mapRef", void 0);
    AnunciogpsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-anunciogps',
            templateUrl: 'anunciogps.html',
        }),
        __metadata("design:paramtypes", [NavParams])
    ], AnunciogpsPage);
    return AnunciogpsPage;
}());
export { AnunciogpsPage };
//# sourceMappingURL=anunciogps.js.map