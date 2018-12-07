import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavParams } from 'ionic-angular';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-anunciogps',
  templateUrl: 'anunciogps.html',
})
export class AnunciogpsPage {	

	lat:string=null;
	long:string=null;
  
  @ViewChild('map') mapRef: ElementRef; 


  constructor(public navParams: NavParams) {   
  	//console.log(navParams.data.item.longitud);
  	//console.log(navParams.data.item.latitud);
    this.setLong(navParams.data.item.longitud);
    this.setLat(navParams.data.item.latitud);

       
  }

//******************Getters y Setters******************
  public setLong(ln){
    this.long=ln;
  }

  public getLong(){
    return this.long;
  }

  public setLat(lt){
    this.lat=lt;
  } 

  public getLat(){
    return this.lat;
  }

//*****************************************************

  ionViewDidLoad() {
    this.showMap();
  }


//*********** Geolocalizacion  

showMap(){
  const location=new google.maps.LatLng(this.getLat(), this.getLong()); 
  const options={
    center: location,
    zoom: 15,
    streetViewControl: false,
    mapTypeId: 'terrain'
  }; 
  const map= new google.maps.Map(this.mapRef.nativeElement,options);
  this.addMarker(location, map);
 }
    
addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
}

}

