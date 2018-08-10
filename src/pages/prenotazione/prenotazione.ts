import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController, ToastController } from 'ionic-angular';
import { UrlGlobalsProvider } from '../../providers/url-globals/url-globals';
import { RequestOptions } from '@angular/http';
import { LoginPage } from "../login/login"
import { Network } from '@ionic-native/network';
import { MappaPage } from '../mappa/mappa';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the PrenotazionePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prenotazione',
  templateUrl: 'prenotazione.html',
})
export class PrenotazionePage {

  public prenotazione_call_url: any;
  public data_prenotazione: any = {};
  public toast: any;

  goToMappaPage(params) {
    if (!params) params = {};
    /*let mappaModal = this.modalCtrl.create(MappaPage, params);
    mappaModal.present();*/
    this.navCtrl.push(MappaPage);

  }


  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public urlGlobal: UrlGlobalsProvider, public http: HttpClient, public events: Events
    , private network_on_page: Network, private toastCtrl: ToastController) {

    this.urlGlobal.loadUrl().then(result => {

      this.prenotazione_call_url = result[2].prenotazione_url;

      this.getDataFromRemote();


      events.subscribe('network:connected', (time) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.getDataFromRemote();
        this.navCtrl.push(this.navCtrl.getActive().component).then(() => {
          let index = this.viewCtrl.index;
          this.navCtrl.remove(index);
        })
      });


    });



  }
  getDataFromRemote() {


    let body = encodeURI('token=' + window.localStorage.getItem("token") + '&idCongresso=4');
    var headers_post = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http.post(this.prenotazione_call_url, body, { headers: headers_post })
      .subscribe(res => {
        let this_response = res;

        this.data_prenotazione = {};
        this.data_prenotazione = this_response;

        if (this.data_prenotazione.response == "001") {
          window.localStorage.clear();
          this.navCtrl.setRoot(LoginPage);
        } else {

          window.localStorage.setItem("data_prenotazione", JSON.stringify(this_response));

        }

      }, error => {
        if (this.toast) {
          this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
          message: 'Si è verificato un errore, riprova più tardi.',
          position: 'bottom',
          cssClass: 'error-toast',
          showCloseButton: true,
          closeButtonText: 'Ok',
          dismissOnPageChange: true
        });

        this.toast.present();

      });

  }
  ionViewWillLeave() {

    this.events.unsubscribe('network:connected');

  }
}
