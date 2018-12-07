import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-revista',
  templateUrl: 'revista.html',
})

export class RevistaPage {  

  //codigo para abrir web viewer
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {}

  irRevista1(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel01.html','_self'); 	
  }

  irRevista2(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel02.html','_self'); 	
  }

  irRevista3(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel03.html','_self'); 	
  }

  irRevista4(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel04.html','_self'); 	
  }

  irRevista5(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel05.html','_self'); 	
  }

  irRevista6(){
  	this.iab.create('http://app.caucelpublicidad.com/revista/revista_caucel06.html','_self'); 	
  }


  ionViewDidLoad() {}

}
