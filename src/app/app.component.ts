import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { timer } from 'rxjs/observable/timer';
//import { FCM } from '@ionic-native/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;  
   showSplash = true;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    //private fcm: FCM
   ) {   
    //this.iniciarFCM();     
    this.initializeApp();    
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  initializeApp() {
      this.platform.ready().then(() => {      
      this.statusBar.styleDefault();      
      this.splashScreen.hide(); 
      timer(500).subscribe(() => this.showSplash = false)
    });    
  }

  /*iniciarFCM(){
    if (this.platform.is('cordova')) {
    this.fcm.getToken().then(token => {
      console.log("este es el tokend para el dispositivo "+token);
    });
    
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Aplicacion se ejecuta en segundo Plano"+JSON.stringify(data));
      } else {
        console.log("Aplicacion se ejecuta en primer Plano"+JSON.stringify(data));
      };
    });
    
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log("Actualizacion token"+ token);
    });
  }
    
  }*/
  
  openPage(page) {
    this.nav.setRoot(page.component);
  } 

  
  
 
}
