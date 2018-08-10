import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { StaffPage } from '../staff/staff';
import { ProgrammaPage } from '../programma/programma';
import { BachecaPage } from '../bacheca/bacheca';
import { EventiPage } from '../eventi/eventi';
import { NotifichePage } from '../notifiche/notifiche';
import { MappaPage } from '../mappa/mappa';

@Component({
  selector: 'page-invitati',
  templateUrl: 'invitati.html'
})
export class InvitatiPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    console.log("InvitatiPage");
  }

  goToMappa(params) {
    if (!params) params = {};
    this.navCtrl.push(MappaPage);
  }
  goToNotifichePage(params) {
    if (!params) params = {};
    this.navCtrl.push(NotifichePage);
  }
  goToProgramma(params) {
    if (!params) params = {};

    this.navCtrl.push(ProgrammaPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }
  goToBacheca(params) {
    if (!params) params = {};

    this.navCtrl.push(BachecaPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }
  goToEventi(params) {
    if (!params) params = {};

    this.navCtrl.push(EventiPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }
  goToStaff(params) {
    if (!params) params = {};
    this.navCtrl.push(StaffPage);
  }

}
