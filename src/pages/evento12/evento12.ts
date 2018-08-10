import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento12',
  templateUrl: 'evento12.html',
})
export class Evento12Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento12Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
