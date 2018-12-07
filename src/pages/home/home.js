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
import { NavController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { DirectorioPage } from '../directorio/directorio';
import { AnunciatePage } from '../anunciate/anunciate';
import { RevistaPage } from '../revista/revista';
import { InteresPage } from '../interes/interes';
import { CercadetiPage } from '../cercadeti/cercadeti';
import { DirectoriodetallePage } from '../directoriodetalle/directoriodetalle';
import { ArticulodetallePage } from '../articulodetalle/articulodetalle';
import { AnunciogpsPage } from '../anunciogps/anunciogps';
import { DestacadoPage } from '../destacado/destacado';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, callNumber, proveedor, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.proveedor = proveedor;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.categoria = null;
        this.message = 'Te comparto MIDPublicidad';
        this.file = null;
        this.link = null;
        this.subject = null;
        this.initializeItems();
    }
    HomePage.prototype.initializeItems = function () {
        this.items = this.anuncios;
    };
    //*********Mensaje Encontrado
    HomePage.prototype.Encontrado = function (categoria) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'No se encontro ningun anuncio relacionado con: ' + categoria,
            buttons: ['Aceptar']
        });
        alert.present();
    };
    // ***************************llamadas
    HomePage.prototype.llamada = function (item) {
        this.callNumber.callNumber(item.telefono, true);
    };
    // ***************************Compartir
    HomePage.prototype.share = function (item) {
        this.file = "http://api.caucelpublicidad.com/assets/img/anuncio/" + item.imagen;
        this.socialSharing.share(this.message, this.subject, this.file, this.link).then(function () {
            // Success!
        }).catch(function () {
            // Error!
        });
    };
    //***************Filtro general por nombre en el searchbar
    HomePage.prototype.filtrarAnuncios = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //***********Filtro de Botones por Categoria
    HomePage.prototype.filtrarAlimentos = function () {
        this.initializeItems();
        var val = "ALIMENTOS Y BARES";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    HomePage.prototype.filtrarSalud = function () {
        this.initializeItems();
        var val = "SALUD Y BIENESTAR";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    HomePage.prototype.filtrarEscuela = function () {
        this.initializeItems();
        var val = "ESCUELAS Y ACADEMIAS";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    HomePage.prototype.filtrarTurismo = function () {
        this.initializeItems();
        var val = "VIAJES Y TURISMO";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    HomePage.prototype.filtrarMascotas = function () {
        this.initializeItems();
        var val = "MASCOTAS";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    HomePage.prototype.filtrarTalleres = function () {
        this.initializeItems();
        var val = "TALLER Y SERVICIOS";
        this.categoria = val;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (!(this.items[0])) {
            this.Encontrado(val);
        }
    };
    //*********************************************
    HomePage.prototype.irDirectorio = function () {
        this.navCtrl.push(DirectorioPage);
    };
    HomePage.prototype.irAnunciate = function () {
        this.navCtrl.push(AnunciatePage);
    };
    HomePage.prototype.irRevista = function () {
        this.navCtrl.push(RevistaPage);
    };
    HomePage.prototype.irInteres = function () {
        this.navCtrl.push(InteresPage);
    };
    HomePage.prototype.irCercadeti = function () {
        this.navCtrl.push(CercadetiPage);
    };
    HomePage.prototype.irDirectorioDetalle = function (item) {
        this.navCtrl.push(DirectoriodetallePage, { item: item });
    };
    HomePage.prototype.irArticuloDetalle = function (item) {
        this.navCtrl.push(ArticulodetallePage, { item: item });
    };
    HomePage.prototype.irDestacados = function () {
        this.navCtrl.push(DestacadoPage);
    };
    HomePage.prototype.irAnuncioGps = function (item) {
        this.navCtrl.push(AnunciogpsPage, { item: item });
    };
    //********************DESPLIGUES DIRECTOS**************
    HomePage.prototype.ionViewDidLoad = function () {
        //Anuncios Destacados
        var _this = this;
        this.proveedor.getAnuncioDestacados()
            .subscribe(function (data) {
            _this.destacados = data;
        }, function (error) {
            console.error(error);
        });
        //Imagenes Carrusel
        this.proveedor.getAllCarrusel()
            .subscribe(function (data) {
            _this.carruseles = data;
        }, function (error) {
            console.error(error);
        });
        //Articulos
        this.proveedor.getAllArticulo()
            .subscribe(function (data) {
            _this.articulos = data;
        }, function (error) {
            console.error(error);
        });
        //Todos los Anuncios
        this.proveedor.getAllAnuncio()
            .subscribe(function (data) {
            _this.anuncios = data;
        }, function (error) {
            console.error(error);
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            CallNumber,
            Proveedor1Provider,
            SocialSharing,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map