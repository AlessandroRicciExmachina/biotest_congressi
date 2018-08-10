import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CongressiPage } from '../congressi/congressi';
import { CongressoPage } from '../congresso/congresso';
import { ProgrammaPage } from '../programma/programma';
import { BachecaPage } from '../bacheca/bacheca';
import { StaffPage } from '../staff/staff';
import { EventiPage } from '../eventi/eventi';
import { EventoPage } from '../evento/evento';
import { UrlGlobalsProvider } from '../../providers/url-globals/url-globals';
import jsSHA from 'jssha';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public login_url_string: any;
  public loginForm: any = {};
  public toast: any;
  public dont_present_login: any;
  public this_response: any = {};
  constructor(public navCtrl: NavController, public urlGlobal: UrlGlobalsProvider, public http: HttpClient, private toastCtrl: ToastController) {

    /*CARICAMENTO URL DA PROVIDER (url-globals)*/

    this.urlGlobal.loadUrl().then(result => {
      this.login_url_string = result[0].login_url;
    });
    this.toast = null;
    ///// Prima di visualizzare la pagina login verifico che
    var is_logged = window.localStorage.getItem("is_logged")
    if (is_logged && is_logged == "1") {

      this.goToCongressi(null);
      this.dont_present_login = true;

    } else {

      this.dont_present_login = false;

    }
  }
  ionViewWillEnter() {


  }
  login() {

    if (!this.loginForm.email || !this.loginForm.password) {
      if (this.toast) {
        this.toast.dismiss();
      }
      this.toast = this.toastCtrl.create({
        message: "Inserisci Email e password",
        position: 'bottom',
        cssClass: 'error-toast',
        showCloseButton: true,
        closeButtonText: 'Ok',
        dismissOnPageChange: true
      });

      this.toast.present();

    } else {

      var thisTime = this.getIsoDate();
      var costante = "fw32e5465ad551as";
      var sha256 = thisTime + "" + costante;

      let shaObj = new jsSHA("SHA-256", "TEXT");
      shaObj.update(sha256);
      let hash = shaObj.getHash("HEX");

      let shaObj_pass = new jsSHA("SHA-256", "TEXT");
      shaObj_pass.update(this.loginForm.password);
      let hash_pass = shaObj_pass.getHash("HEX");

      let body = encodeURI('email=' + this.loginForm.email + '&password=' + hash_pass + '&dataCompilazione=' + thisTime + '&codiceVerifica=' + hash);
      var headers_post = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      this.http.post(this.login_url_string, body, { headers: headers_post })
        .subscribe(res => {
          this.this_response = res;
          if (this.this_response.response == "100") {

            window.localStorage.setItem("token", this.this_response.token);
            window.localStorage.setItem("role", this.this_response.role);
            window.localStorage.setItem("id", this.this_response.id);
            window.localStorage.setItem("is_logged", "1");
            this.goToCongressi(null);

          } else {
            if (this.this_response.response == "001") {
              if (this.toast) {
                this.toast.dismiss();
              }
              this.toast = this.toastCtrl.create({
                message: "Si è verificato un errore, riprova più tardi.",
                position: 'bottom',
                cssClass: 'error-toast',
                showCloseButton: true,
                closeButtonText: 'Ok',
                dismissOnPageChange: true
              });

              this.toast.present();
            } else {
              if (this.toast) {
                this.toast.dismiss();
              }
              this.toast = this.toastCtrl.create({
                message: this.this_response.message,
                position: 'bottom',
                cssClass: 'error-toast',
                showCloseButton: true,
                closeButtonText: 'Ok',
                dismissOnPageChange: true
              });

              this.toast.present();
            }

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

      /*  this.http.get(link, null)
          .subscribe(data => {
            let this_response = JSON.parse(data["_body"]);
            console.log(this_response);
            console.log(this_response.response);
            if (this_response.response == "100") {

              window.localStorage.setItem("token", this_response.token);
              window.localStorage.setItem("role", this_response.role);
              window.localStorage.setItem("id", this_response.id);
              window.localStorage.setItem("is_logged", "1");
              this.goToCongressi(null);

            } else {
              if (this_response.response == "001") {
                if (this.toast) {
                  this.toast.dismiss();
                }
                this.toast = this.toastCtrl.create({
                  message: "Si è verificato un errore, riprova più tardi.",
                  position: 'bottom',
                  cssClass: 'error-toast',
                  showCloseButton: true,
                  closeButtonText: 'Ok',
                  dismissOnPageChange: true
                });

                this.toast.present();
              } else {
                if (this.toast) {
                  this.toast.dismiss();
                }
                this.toast = this.toastCtrl.create({
                  message: this_response.message,
                  position: 'bottom',
                  cssClass: 'error-toast',
                  showCloseButton: true,
                  closeButtonText: 'Ok',
                  dismissOnPageChange: true
                });

                this.toast.present();
              }


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
          });*/
    }
  }

  getIsoDate() {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy_string = String(today.getFullYear());
    let hh = today.getHours();
    let min = today.getMinutes();
    let ss = today.getSeconds();
    var dd_string: any;
    var mm_string: any;
    var hh_string: any;
    var min_string: any;
    var ss_string: any;

    if (dd < 10) {
      dd_string = '0' + dd
    } else {
      dd_string = dd
    }

    if (mm < 10) {
      mm_string = '0' + mm
    } else {
      mm_string = mm
    }

    if (hh < 10) {

      hh_string = '0' + hh

    } else {

      hh_string = hh

    }

    if (min < 10) {

      min_string = '0' + min

    } else {

      min_string = min

    }

    if (ss < 10) {

      ss_string = '0' + ss

    } else {

      ss_string = ss

    }

    var today_string = yyyy_string + "" + mm_string + "" + dd_string + "" + hh_string + "" + min_string + "" + ss_string;
    return today_string;

  }
  goToCongressi(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(CongressiPage, {}, { animate: true, direction: 'forward' });
  } goToCongresso(params) {
    if (!params) params = {};
    this.navCtrl.push(CongressoPage);
  } goToProgramma(params) {
    if (!params) params = {};
    this.navCtrl.push(ProgrammaPage);
  } goToBacheca(params) {
    if (!params) params = {};
    this.navCtrl.push(BachecaPage);
  } goToStaff(params) {
    if (!params) params = {};
    this.navCtrl.push(StaffPage);
  } goToEventi(params) {
    if (!params) params = {};
    this.navCtrl.push(EventiPage);
  } goToEvento(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoPage);
  }
}
