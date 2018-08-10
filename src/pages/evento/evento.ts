import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html'
})
export class EventoPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log("EventoPage");
  }
  closePage() {

    this.navCtrl.pop();

  }
}
