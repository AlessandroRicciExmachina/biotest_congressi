import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento13',
  templateUrl: 'evento13.html',
})
export class Evento13Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento13Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
