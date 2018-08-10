import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CongressoPage } from '../congresso/congresso';
import { ProgrammaPage } from '../programma/programma';
import { BachecaPage } from '../bacheca/bacheca';
import { StaffPage } from '../staff/staff';
import { EventiPage } from '../eventi/eventi';
import { EventoPage } from '../evento/evento';
import { NotifichePage } from '../notifiche/notifiche';
@Component({
  selector: 'page-congressi',
  templateUrl: 'congressi.html'
})
export class CongressiPage {

  constructor(public navCtrl: NavController) {

    console.log("CongressiPage");

  }
  goToNotifichePage(params) {
    if (!params) params = {};
    this.navCtrl.push(NotifichePage);
  }
  goToCongresso(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(CongressoPage, {}, { animate: true, direction: 'forward' });
  } goToProgramma(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(ProgrammaPage, {}, { animate: true, direction: 'forward' });
  } goToBacheca(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(BachecaPage, {}, { animate: true, direction: 'forward' });
  } goToStaff(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(StaffPage, {}, { animate: true, direction: 'forward' });
    if (!params) params = {};
    this.navCtrl.setRoot(EventiPage, {}, { animate: true, direction: 'forward' });
  } goToEvento(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(EventoPage, {}, { animate: true, direction: 'forward' });
  }

}
