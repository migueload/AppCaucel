import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DirectoriodetallePage } from '../directoriodetalle/directoriodetalle';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})

export class DirectorioPage {  
   
  anuncios:any;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider) {
     this.initializeItems();
  }

  initializeItems() {    
    this.items=this.anuncios;
  }

  ionViewDidLoad() { 
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

  irDirectorioDetalle(item){
    this.navCtrl.push(DirectoriodetallePage, {item:item});
  }

  filtrarAnuncios(ev: any) {  
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
