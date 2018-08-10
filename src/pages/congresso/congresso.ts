import { NavController, ViewController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProgrammaPage } from '../programma/programma';
import { BachecaPage } from '../bacheca/bacheca';
import { StaffPage } from '../staff/staff';
import { EventiPage } from '../eventi/eventi';
import { EventoPage } from '../evento/evento';
import { InvitatiPage } from '../invitati/invitati';
import { NotifichePage } from '../notifiche/notifiche';
import { MappaPage } from '../mappa/mappa';
import { PrenotazionePage } from '../prenotazione/prenotazione';
@Component({
  selector: 'page-congresso',
  templateUrl: 'congresso.html'
})
export class CongressoPage {
  public boxState: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    console.log("CongressoPage");
    this.boxState = "60px";

  }

  showHide($event, param) {

    this.boxState = param;
    $event.stopPropagation();

  }

  /*navigazione*/
  goToPrenotazione(params) {
    if (!params) params = {};
    /*let mappaModal = this.modalCtrl.create(MappaPage, params);
    mappaModal.present();*/
    this.navCtrl.push(PrenotazionePage);

  }
  goToMappaPage(params) {
    if (!params) params = {};
    /*let mappaModal = this.modalCtrl.create(MappaPage, params);
    mappaModal.present();*/
    this.navCtrl.push(MappaPage);

  }

  goToNotifichePage(params) {
    if (!params) params = {};
    this.navCtrl.push(NotifichePage);
  }
  goToProgramma(params) {
    if (!params) params = {};
    this.navCtrl.push(ProgrammaPage);
  }
  goToBacheca(params) {
    if (!params) params = {};
    this.navCtrl.push(BachecaPage);
  }
  goToStaff(params) {
    if (!params) params = {};
    this.navCtrl.push(StaffPage);
  }
  goToEventi(params) {
    if (!params) params = {};
    this.navCtrl.push(EventiPage);
  }
  goToEvento(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoPage);
  }
  goToInvitati(params) {
    if (!params) params = {};
    this.navCtrl.push(InvitatiPage);
  }
}
