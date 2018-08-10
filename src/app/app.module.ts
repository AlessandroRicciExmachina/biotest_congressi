import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CongressiPage } from '../pages/congressi/congressi';
import { ModificaDatiPersonaliPage } from '../pages/modifica-dati-personali/modifica-dati-personali';
import { CongressoPage } from '../pages/congresso/congresso';
import { ProgrammaPage } from '../pages/programma/programma';
import { EventiPage } from '../pages/eventi/eventi';
import { BachecaPage } from '../pages/bacheca/bacheca';
import { StaffPage } from '../pages/staff/staff';
import { EventoPage } from '../pages/evento/evento';
import { Evento2Page } from '../pages/evento2/evento2';
import { Evento3Page } from '../pages/evento3/evento3';
import { Evento4Page } from '../pages/evento4/evento4';
import { Evento5Page } from '../pages/evento5/evento5';
import { Evento6Page } from '../pages/evento6/evento6';
import { Evento7Page } from '../pages/evento7/evento7';
import { Evento8Page } from '../pages/evento8/evento8';
import { Evento9Page } from '../pages/evento9/evento9';
import { Evento10Page } from '../pages/evento10/evento10';
import { Evento11Page } from '../pages/evento11/evento11';
import { Evento12Page } from '../pages/evento12/evento12';
import { Evento13Page } from '../pages/evento13/evento13';
import { Evento14Page } from '../pages/evento14/evento14';
import { Evento15Page } from '../pages/evento15/evento15';
import { Evento16Page } from '../pages/evento16/evento16';
import { Evento17Page } from '../pages/evento17/evento17';
import { Evento18Page } from '../pages/evento18/evento18';
import { Evento19Page } from '../pages/evento19/evento19';
import { Evento20Page } from '../pages/evento20/evento20';
import { Evento21Page } from '../pages/evento21/evento21';
import { Evento22Page } from '../pages/evento22/evento22';
import { LoginPage } from '../pages/login/login';
import { InvitatiPage } from '../pages/invitati/invitati';
import { NotifichePage } from '../pages/notifiche/notifiche';
import { PrenotazionePage } from '../pages/prenotazione/prenotazione';
import { MappaPage } from '../pages/mappa/mappa';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UrlGlobalsProvider } from '../providers/url-globals/url-globals';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    CongressiPage,
    ModificaDatiPersonaliPage,
    CongressoPage,
    ProgrammaPage,
    EventiPage,
    BachecaPage,
    StaffPage,
    EventoPage,
    Evento2Page,
    Evento3Page,
    Evento4Page,
    Evento5Page,
    Evento6Page,
    Evento7Page,
    Evento8Page,
    Evento9Page,
    Evento10Page,
    Evento11Page,
    Evento12Page,
    Evento13Page,
    Evento14Page,
    Evento15Page,
	Evento16Page,
	Evento17Page,
	Evento18Page,
	Evento19Page,
	Evento20Page,
	Evento21Page,
	Evento22Page,
    LoginPage,
    InvitatiPage,
    NotifichePage,
    MappaPage,
    PrenotazionePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          scrollAssist: true,    // Valid options appear to be [true, false]
          autoFocusAssist: false,  // Valid options appear to be ['instant', 'delay', false]
          inputBlurring: false,
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CongressiPage,
    ModificaDatiPersonaliPage,
    CongressoPage,
    ProgrammaPage,
    EventiPage,
    BachecaPage,
    StaffPage,
    EventoPage,
    Evento2Page,
    Evento3Page,
    Evento4Page,
    Evento5Page,
    Evento6Page,
    Evento7Page,
    Evento8Page,
    Evento9Page,
    Evento10Page,
    Evento11Page,
    Evento12Page,
    Evento13Page,
    Evento14Page,
    Evento15Page,
	Evento16Page,
	Evento17Page,
	Evento18Page,
	Evento19Page,
	Evento20Page,
	Evento21Page,
	Evento22Page,
    LoginPage,
    InvitatiPage,
    NotifichePage,
    MappaPage,
    PrenotazionePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Device,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UrlGlobalsProvider
  ]
})
export class AppModule { }
