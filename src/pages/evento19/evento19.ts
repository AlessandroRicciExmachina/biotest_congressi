import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento19',
  templateUrl: 'evento19.html',
})
export class Evento19Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento19Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
