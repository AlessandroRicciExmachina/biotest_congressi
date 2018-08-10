import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento2',
  templateUrl: 'evento2.html',
})
export class Evento2Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento2Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
