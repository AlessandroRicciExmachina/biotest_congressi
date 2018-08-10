import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento20',
  templateUrl: 'evento20.html',
})
export class Evento20Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento20Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
