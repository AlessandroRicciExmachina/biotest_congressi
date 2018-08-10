import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CongressiPage } from '../pages/congressi/congressi';
import { ModificaDatiPersonaliPage } from '../pages/modifica-dati-personali/modifica-dati-personali';
import { NavController } from 'ionic-angular';
import { UrlGlobalsProvider } from '../providers/url-globals/url-globals';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { Events } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = LoginPage;
  toast: any;

  constructor(public alertCtrl: AlertController, platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen,
    public urlGlobal: UrlGlobalsProvider, public http: HttpClient, private network: Network, private toastCtrl: ToastController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('ios')) {

        // do nothing

      } else {

        statusBar.styleDefault();
        splashScreen.hide();

      }

      var networkState = this.network.type;
      if (networkState === "none") {
        console.log('network was cordova-disconnected :-(');
        this.toast = this.toastCtrl.create({
          message: "Sei offline, attiva una connessione a internet",
          position: 'bottom',
          cssClass: 'error-toast',
          showCloseButton: false,
          dismissOnPageChange: false
        });
        this.toast.present();
      }
      let disconnectSubscription_disconnect = this.network.onDisconnect().subscribe(() => {
        console.log('network was cordova-disconnected :-(');
        this.toast = this.toastCtrl.create({
          message: "Sei offline, attiva una connessione a internet",
          position: 'bottom',
          cssClass: 'error-toast',
          showCloseButton: false,
          dismissOnPageChange: false
        });
        this.toast.present();

      });


      let connectSubscription_connect = this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        window.localStorage.setItem("is_online", "1")
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {

          this.toast.dismiss();
          this.events.publish('network:connected', Date.now());

        }, 4000);
      });

    });


  }
  presentLogoutConfirm() {
    let alert = this.alertCtrl.create({
      title: '',
      message: "Sei sicuro?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    alert.present();
  }


  goToCongressi() {

    this.navCtrl.setRoot(CongressiPage);

  }
  logout() {
    var link: any;

    var headers_post = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    this.urlGlobal.loadUrl().then(result => {
      link = result[1].logout_url + "?token=" + window.localStorage.getItem("token");
      this.http.get(link, { headers: headers_post })
        .subscribe(data => {
          console.log(data);
          let this_response = data;
          window.localStorage.clear();
          this.navCtrl.setRoot(LoginPage);

        }, error => {
          window.localStorage.clear();
          this.navCtrl.setRoot(LoginPage);
        });
    });


  }
  goToModificaDatiPersonali() {

    this.navCtrl.push(ModificaDatiPersonaliPage);

  }


}
