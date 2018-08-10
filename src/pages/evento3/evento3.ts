import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento3',
  templateUrl: 'evento3.html',
})
export class Evento3Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento3Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
