import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento5',
  templateUrl: 'evento5.html',
})
export class Evento5Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento5Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
