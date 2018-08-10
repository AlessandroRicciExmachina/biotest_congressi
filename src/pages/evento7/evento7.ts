import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento7',
  templateUrl: 'evento7.html',
})
export class Evento7Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento7Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
