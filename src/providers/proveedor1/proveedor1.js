var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var Proveedor1Provider = /** @class */ (function () {
    function Proveedor1Provider(httpClient) {
        this.httpClient = httpClient;
    }
    Proveedor1Provider.prototype.getAllCarrusel = function () {
        return this.httpClient.get('http://api.caucelpublicidad.com/index.php/carrusel/todos');
    };
    Proveedor1Provider.prototype.getAllArticulo = function () {
        return this.httpClient.get('http://api.caucelpublicidad.com/index.php/articulo/todos');
    };
    Proveedor1Provider.prototype.getAllAnuncio = function () {
        return this.httpClient.get('http://api.caucelpublicidad.com/index.php/anuncio/todos');
    };
    Proveedor1Provider.prototype.getAnuncioDestacados = function () {
        return this.httpClient.get('http://api.caucelpublicidad.com/index.php/anuncio/destacados');
    };
    Proveedor1Provider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], Proveedor1Provider);
    return Proveedor1Provider;
}());
export { Proveedor1Provider };
//# sourceMappingURL=proveedor1.js.map