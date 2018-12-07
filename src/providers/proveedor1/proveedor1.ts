import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class Proveedor1Provider {
	
  anuncios;
  constructor(public httpClient: HttpClient){}

  getAllCarrusel(){
  	return this.httpClient.get('http://api.caucelpublicidad.com/index.php/carrusel/todos');    
  } 

  getAllArticulo(){
  	return this.httpClient.get('http://api.caucelpublicidad.com/index.php/articulo/todos');
  }    

  getAllAnuncio(){
  	return this.httpClient.get('http://api.caucelpublicidad.com/index.php/anuncio/todos');	    
  }  

  getAnuncioDestacados(){
    return this.httpClient.get('http://api.caucelpublicidad.com/index.php/anuncio/destacados');      
  }       

}
