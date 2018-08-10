import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { ProgrammaPage } from '../programma/programma';
import { InvitatiPage } from '../invitati/invitati';
import { BachecaPage } from '../bacheca/bacheca';
import { NotifichePage } from '../notifiche/notifiche';
import { EventoPage } from '../evento/evento';
import { Evento2Page } from '../evento2/evento2';
import { Evento3Page } from '../evento3/evento3';
import { MappaPage } from '../mappa/mappa';
@Component({
  selector: 'page-eventi',
  templateUrl: 'eventi.html'
})

export class EventiPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    console.log("EventiPage");
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

  goToInvitati(params) {
    if (!params) params = {};

    this.navCtrl.push(InvitatiPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }

  goToBacheca(params) {
    if (!params) params = {};
    this.navCtrl.push(BachecaPage);
    this.navCtrl.remove(this.viewCtrl.index)
  }
  goToEvento(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoPage);
  }
  goToEvento2(params) {
    if (!params) params = {};
    this.navCtrl.push(Evento2Page);
  }
  goToEvento3(params) {
    if (!params) params = {};
    this.navCtrl.push(Evento3Page);
  }
}
