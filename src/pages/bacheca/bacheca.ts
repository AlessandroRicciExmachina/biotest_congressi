import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { EventiPage } from '../eventi/eventi';
import { InvitatiPage } from '../invitati/invitati';
import { ProgrammaPage } from '../programma/programma';
import { NotifichePage } from '../notifiche/notifiche';
import { MappaPage } from '../mappa/mappa';
@Component({
  selector: 'page-bacheca',
  templateUrl: 'bacheca.html'
})
export class BachecaPage {
  public tab1: boolean;
  public tab2: boolean;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    console.log("BachecaPage");
    this.tab1 = true;
    this.tab2 = null;
  }

  changeTab(tabCase) {

    if (tabCase == 1) {

      this.tab1 = true;
      this.tab2 = null;

    } else {

      this.tab1 = null;
      this.tab2 = true;

    }

  }
  goToMappaPage(params) {
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
