import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento10',
  templateUrl: 'evento10.html',
})
export class Evento10Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento10Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
