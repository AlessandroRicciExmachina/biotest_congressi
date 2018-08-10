import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento18',
  templateUrl: 'evento18.html',
})
export class Evento18Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento18Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
