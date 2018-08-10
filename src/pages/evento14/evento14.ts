import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento14',
  templateUrl: 'evento14.html',
})
export class Evento14Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento14Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
