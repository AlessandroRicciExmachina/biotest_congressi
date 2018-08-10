import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento21',
  templateUrl: 'evento21.html',
})
export class Evento21Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento21Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
