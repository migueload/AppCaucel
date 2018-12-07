import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
  destacados
  carruseles;  
  articulos;
  anuncios;  
  items:any;

  categoria:string=null;   
  message:string = 'MIDPublicidad';
  file:string = null;
  link:string = null;
  subject:string = null;   

  constructor(
    public navCtrl: NavController,
    private callNumber: CallNumber,
    public proveedor:Proveedor1Provider,
    private socialSharing: SocialSharing,
    public alertCtrl: AlertController
  ){
    this.initializeItems();
  }


  initializeItems() {    
    this.items=this.anuncios;
  }



//*********Mensaje Encontrado

 Encontrado(categoria) {
      const alert = this.alertCtrl.create({
      title: '',
      subTitle: 'No se encontro ningun anuncio relacionado con: '+categoria,
      buttons: ['Aceptar']
    });
    alert.present();    
  }


// ***************************llamadas

  llamada(item){
    this.callNumber.callNumber(item.telefono, true);
    
  }

// ***************************Compartir

  share(item){
    this.file="http://api.caucelpublicidad.com/assets/img/anuncio/"+item.imagen; 
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {
      // Success!
     }).catch(() => {
      // Error!
    });
  }

  //***************Filtro general por nombre en el searchbar

  filtrarAnuncios(ev: any) {  
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  //***********Filtro de Botones por Categoria

  filtrarAlimentos() {  
    this.initializeItems();
    const val = "ALIMENTOS Y BARES";     
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(!(this.items[0])){            
      this.Encontrado(val);
    }        
  }

  filtrarSalud() {  
    this.initializeItems();
    const val = "SALUD Y BIENESTAR";
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(!(this.items[0])){            
      this.Encontrado(val);
    }    
  }

  filtrarEscuela() {  
    this.initializeItems();
    const val = "ESCUELAS Y ACADEMIAS";
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
    if(!(this.items[0])){
      this.Encontrado(val);
    }
  }

  filtrarTurismo() {  
    this.initializeItems();
    const val = "VIAJES Y TURISMO";
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(!(this.items[0])){
      this.Encontrado(val);
    }    
  }

  filtrarMascotas() {  
    this.initializeItems();
    const val = "MASCOTAS";
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(!(this.items[0])){
      this.Encontrado(val);
    }    
  }

  filtrarTalleres() {  
    this.initializeItems();
    const val = "TALLER Y SERVICIOS";
    this.categoria=val;   
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoria.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(!(this.items[0])){
      this.Encontrado(val);
    }    
  }

  //*********************************************

  irDirectorio(){
    this.navCtrl.push(DirectorioPage);
  }

  irAnunciate(){
   this.navCtrl.push(AnunciatePage); 
  }

  irRevista(){
   this.navCtrl.push(RevistaPage); 
  }  

  irInteres(){
   this.navCtrl.push(InteresPage); 
  } 

  irCercadeti(){
   this.navCtrl.push(CercadetiPage); 
  } 

  irDirectorioDetalle(item){
    this.navCtrl.push(DirectoriodetallePage, {item:item});
  }

  irArticuloDetalle(item){
    this.navCtrl.push(ArticulodetallePage, {item:item});
  }

  irDestacados(){
    this.navCtrl.push(DestacadoPage);     
  }

  irAnuncioGps(item){
    this.navCtrl.push(AnunciogpsPage, {item:item});
  }

//********************DESPLIGUES DIRECTOS**************

  
   ionViewDidLoad(){

//Anuncios Destacados

    this.proveedor.getAnuncioDestacados()  
    .subscribe(
      (data) => { 
        this.destacados = data;        
      },      
    (error) =>{
        console.error(error);
      }
    )

//Imagenes Carrusel

    this.proveedor.getAllCarrusel()  
    .subscribe(
      (data) => { 
        this.carruseles = data;        
      },      
    (error) =>{
        console.error(error);
      }
    )

//Articulos

    this.proveedor.getAllArticulo()  
    .subscribe(
      (data) => { 
        this.articulos = data;        
      },      
    (error) =>{
        console.error(error);
      }
    )

//Todos los Anuncios

    this.proveedor.getAllAnuncio()  
    .subscribe(
      (data) => { 
        this.anuncios = data;        
      },      
    (error) =>{
        console.error(error);
      }
    )
 }

 //****************************


}
