import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { BachecaPage } from '../bacheca/bacheca';
import { EventiPage } from '../eventi/eventi';
import { InvitatiPage } from '../invitati/invitati';
import { NotifichePage } from '../notifiche/notifiche';
import { MappaPage } from '../mappa/mappa';

@Component({
  selector: 'page-programma',
  templateUrl: 'programma.html'
})
export class ProgrammaPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    console.log("ProgrammaPage");

  }
  goToMappaPage(params) {
    if (!params) params = {};
    this.navCtrl.push(MappaPage);
  }

  goToNotifichePage(params) {
    if (!params) params = {};
    this.navCtrl.push(NotifichePage);
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
  goToInvitati(params) {
    if (!params) params = {};
    this.navCtrl.push(InvitatiPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }
}
