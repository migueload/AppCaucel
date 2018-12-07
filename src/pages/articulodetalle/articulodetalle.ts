import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-articulodetalle',
  templateUrl: 'articulodetalle.html',
})
export class ArticulodetallePage {

  articulo;
  constructor(public navParams: NavParams){  	
  	this.articulo=navParams.data.item;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulodetallePage');
  }

}
