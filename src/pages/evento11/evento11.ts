import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento11',
  templateUrl: 'evento11.html',
})
export class Evento11Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento11Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
