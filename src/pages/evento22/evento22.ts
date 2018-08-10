import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento22',
  templateUrl: 'evento22.html',
})
export class Evento22Page {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("Evento22Page");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
