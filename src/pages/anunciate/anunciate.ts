import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-anunciate',
  templateUrl: 'anunciate.html',
})
export class AnunciatePage {

  constructor(    
    public navCtrl: NavController,     
    public alertCtrl: AlertController,
    public httpClient: HttpClient
  ) {}
  
  datos={}

  showAlert() {
      const alert = this.alertCtrl.create({
      title: 'Registro de Anunciante',
      subTitle: 'El mensaje se guardo exitosamente!',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  
  guardarAnunciante(){       
    this.showAlert();    
    this.httpClient.post('http://api.caucelpublicidad.com/insert.php',JSON.stringify(this.datos))
    .subscribe(data=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    }
    );
    this.navCtrl.setRoot(HomePage);
  } 
  

  ionViewDidLoad() {    
  }

}
