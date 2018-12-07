import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { HttpClientModule } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AnunciatePage } from '../pages/anunciate/anunciate';
import { DirectorioPage } from '../pages/directorio/directorio';
import { RevistaPage } from '../pages/revista/revista';
import { InteresPage } from '../pages/interes/interes';
import { DirectoriodetallePage } from '../pages/directoriodetalle/directoriodetalle';
import { CercadetiPage } from '../pages/cercadeti/cercadeti';
import { ArticulodetallePage } from '../pages/articulodetalle/articulodetalle';
import { AnunciogpsPage } from '../pages/anunciogps/anunciogps';
import { DestacadoPage } from '../pages/destacado/destacado';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    DirectoriodetallePage,
    AnunciatePage,
    DirectorioPage,
    RevistaPage,
    CercadetiPage,
    InteresPage,
    ArticulodetallePage,
    AnunciogpsPage,
    DestacadoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DirectoriodetallePage,
    AnunciatePage,
    DirectorioPage,
    RevistaPage,
    CercadetiPage,
    InteresPage,
    ArticulodetallePage,
    AnunciogpsPage,
    DestacadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,    
    SocialSharing,    
    InAppBrowser,    
    Proveedor1Provider
  ]
})
export class AppModule {}


