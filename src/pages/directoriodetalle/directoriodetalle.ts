import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { AnunciogpsPage } from '../anunciogps/anunciogps';

@IonicPage()
@Component({
  selector: 'page-directoriodetalle',
  templateUrl: 'directoriodetalle.html',
})
export class DirectoriodetallePage {   
  anuncio;

  public ocultar(){
    if(this.anuncio.categoria=="ALIMENTOS Y BARES"){
      return true;
    }else{
      return false;
    }
  }

  constructor( 
  public navCtrl: NavController,
  public navParams: NavParams,
  public http: HttpClient   
   ){  	
  	this.anuncio=navParams.data.item;    
  }

  
    
  ionViewDidLoad() {    
  } 

  guardarEstadisticas(){      
    this.http.post('http://api.caucelpublicidad.com/guardarestadisticas.php',JSON.stringify(this.anuncio))
    .subscribe(data=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    }
    );
    this.navCtrl.setRoot(HomePage);
  }  

  irAnuncioGps(item){
    this.navCtrl.push(AnunciogpsPage, {item:item});
  }

}
