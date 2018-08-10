import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-modifica-dati-personali',
  templateUrl: 'modifica-dati-personali.html'
})
export class ModificaDatiPersonaliPage {

  constructor(public navCtrl: NavController) {
    console.log("ModificaDatiPersonaliPage");
  }

}
