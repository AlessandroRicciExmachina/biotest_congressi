import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento17',
  templateUrl: 'evento17.html',
})
export class Evento17Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento17Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
