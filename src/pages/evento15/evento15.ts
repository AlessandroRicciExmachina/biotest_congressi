import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento15',
  templateUrl: 'evento15.html',
})
export class Evento15Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento15Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
