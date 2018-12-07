import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { DirectoriodetallePage } from '../directoriodetalle/directoriodetalle';
import { AnunciogpsPage } from '../anunciogps/anunciogps';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-destacado',
  templateUrl: 'destacado.html',
})

export class DestacadoPage {  
   
  destacados:any;
  items:any;

  categoria:string=null;   
  message:string = 'MIDPublicidad';
  file:string = null;
  link:string = null;
  subject:string = null;  

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public proveedor:Proveedor1Provider,
  private socialSharing: SocialSharing,  
  private callNumber: CallNumber) {
     this.initializeItems();
  }

  initializeItems() {    
    this.items=this.destacados;
  }

  ionViewDidLoad() { 
    this.proveedor.getAnuncioDestacados()  
    .subscribe(
      (data) => { 
        this.destacados = data;        
      },      
    (error) =>{
        console.error(error);
      }
    )
  }

  irDirectorioDetalle(item){
    this.navCtrl.push(DirectoriodetallePage, {item:item});
  }

  irAnuncioGps(item){
    this.navCtrl.push(AnunciogpsPage, {item:item});
  }


// ***************************llamadas

llamada(item){
  this.callNumber.callNumber(item.telefono, true);
  
}

  // ***************************Compartir
  share(item){
    this.file="http://api.caucelpublicidad.com/assets/img/anuncio/"+item.imagen;    
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
    .then(()=>{
    }).catch(()=>{
    });
  }
  
}
