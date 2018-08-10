import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento8',
  templateUrl: 'evento8.html',
})
export class Evento8Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento8Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
