import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@IonicPage()
@Component({
  selector: 'page-interes',
  templateUrl: 'interes.html',
})
export class InteresPage {
 articulos;

  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:Proveedor1Provider) {
  }

  ionViewDidLoad() {
    
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

  }

}
