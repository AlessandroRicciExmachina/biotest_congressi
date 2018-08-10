import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento6',
  templateUrl: 'evento6.html',
})
export class Evento6Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento6Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
