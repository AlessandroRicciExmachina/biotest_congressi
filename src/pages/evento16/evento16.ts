import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento16',
  templateUrl: 'evento16.html',
})
export class Evento16Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento16Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
