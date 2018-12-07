import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-cercadeti',
  templateUrl: 'cercadeti.html',
})
export class CercadetiPage {

  @ViewChild('map') mapRef: ElementRef; 

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  }

  ionViewDidLoad(){
  	this.showMap();
  }

// Geolocalizacion 	
showMap(){
 	const location=new google.maps.LatLng(21.0150679 , -89.70451109999999); 
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
