import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento4',
  templateUrl: 'evento4.html',
})
export class Evento4Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento4Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
