import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento9',
  templateUrl: 'evento9.html',
})
export class Evento9Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento9Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
