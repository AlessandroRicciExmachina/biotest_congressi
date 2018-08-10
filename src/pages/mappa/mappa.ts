import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';
import { Evento2Page } from '../evento2/evento2';
import { Evento3Page } from '../evento3/evento3';
import { Evento4Page } from '../evento4/evento4';
import { Evento5Page } from '../evento5/evento5';
import { Evento6Page } from '../evento6/evento6';
import { Evento7Page } from '../evento7/evento7';
import { Evento8Page } from '../evento8/evento8';
import { Evento9Page } from '../evento9/evento9';
import { Evento10Page } from '../evento10/evento10';
import { Evento11Page } from '../evento11/evento11';
import { Evento12Page } from '../evento12/evento12';
import { Evento13Page } from '../evento13/evento13';
import { Evento14Page } from '../evento14/evento14';
import { Evento15Page } from '../evento15/evento15';
import { Evento16Page } from '../evento16/evento16';
import { Evento17Page } from '../evento17/evento17';
import { Evento18Page } from '../evento18/evento18';
import { Evento19Page } from '../evento19/evento19';
import { Evento20Page } from '../evento20/evento20';
import { Evento21Page } from '../evento21/evento21';
import { Evento22Page } from '../evento22/evento22';
import { } from '@types/googlemaps';
/**
 * Generated class for the MappaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-mappa',
  templateUrl: 'mappa.html',
})


export class MappaPage {
  public map: any;
  public locations: any = [];
  public marker: any = [];
  public mdl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {

    this.locations[0] = [1, 41.073221, 14.327052, , 0];
    this.locations[1] = [2, 41.074039, 14.3290203, "assets/img/icoRistoranti.png", 1];
    this.locations[2] = [3, 41.0725961, 14.319329100000004, "assets/img/icoRistoranti.png", 3];
    this.locations[3] = [4, 41.0722451, 14.318861200000015, "assets/img/icoRistoranti.png", 2];

    this.locations[4] = [5, 41.0970045, 14.3314338, "assets/img/icoAttrazioni.png", 4];
    this.locations[5] = [6, 41.0970518, 14.3312344, "assets/img/icoAttrazioni.png", 5];
    this.locations[6] = [7, 41.0922293, 14.3314944, "assets/img/icoAttrazioni.png", 6];
    this.locations[7] = [8, 41.095136, 14.330106, "assets/img/icoAttrazioni.png", 7];
    this.locations[8] = [9, 41.094842, 14.331242, "assets/img/icoAttrazioni.png", 8];
    this.locations[9] = [10, 41.0983327, 14.3299541, "assets/img/icoAttrazioni.png", 9];
    this.locations[10] = [11, 41.098489, 14.331589, "assets/img/icoAttrazioni.png", 10];
    this.locations[11] = [12, 41.0973165, 14.3317659, "assets/img/icoAttrazioni.png", 11];
	this.locations[12] = [13, 41.0924504, 14.3295719, "assets/img/icoAttrazioni.png", 12];
	this.locations[13] = [14, 41.095753, 14.331506, "assets/img/icoAttrazioni.png", 13];
	this.locations[14] = [15, 41.0962214, 14.3302994, "assets/img/icoAttrazioni.png", 14];
	this.locations[15] = [16, 41.0994175, 14.3302025, "assets/img/icoAttrazioni.png", 15];
	this.locations[16] = [17, 41.0968965, 14.3629724, "assets/img/icoAttrazioni.png", 16];
	this.locations[17] = [18, 41.1009537, 14.2469568, "assets/img/icoAttrazioni.png", 17];
	this.locations[18] = [19, 41.1009537, 14.2469568, "assets/img/icoAttrazioni.png", 18];
	this.locations[19] = [20, 41.0716325, 14.3394999, "assets/img/icoAttrazioni.png", 19];
	this.locations[20] = [21, 41.131111, 14.310833, "assets/img/icoAttrazioni.png", 20];
	this.locations[21] = [22, 41.0068756, 14.3215108, "assets/img/icoShopping.png", 21];
	this.locations[22] = [23, 41.0974167, 14.3307028, "assets/img/icoAttrazioni.png", 22];

    this.mdl = modalCtrl;
  }
  dismiss(data) {

    this.viewCtrl.dismiss(data);

  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
          lat: 41.0834022,
          lng: 14.3263411
        },
        streetViewControl: false,
        mapTypeControl: false,
        disableDefaultUI: true

      });

      for (var i = 0; i < this.locations.length; i++) {
        var icon = {
          url: this.locations[i][3], // url
          scaledSize: new google.maps.Size(50, 50) // scaled size

        };
        this.marker[i] = new google.maps.Marker({
          position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
          map: this.map,
          icon: icon,

        });
        var obj_copy = this.mdl;
        var location_copy = this.locations;
        google.maps.event.addListener(this.marker[i], 'click', (function(marker, i, obj_copy, location_copy) {
          return function() {
            var mappaModal = null;
            switch (location_copy[i][4]) {
              case 0:

                break;
              case 1:
                mappaModal = obj_copy.create(EventoPage);
                mappaModal.present();
                break;
              case 2:
                mappaModal = obj_copy.create(Evento2Page);
                mappaModal.present();
                break;
              case 3:
                mappaModal = obj_copy.create(Evento3Page);
                mappaModal.present();
                break;

              case 4:
                mappaModal = obj_copy.create(Evento4Page);
                mappaModal.present();
                break;
              case 5:
                mappaModal = obj_copy.create(Evento5Page);
                mappaModal.present();
                break;
              case 6:
                mappaModal = obj_copy.create(Evento6Page);
                mappaModal.present();
                break;
              case 7:
                mappaModal = obj_copy.create(Evento7Page);
                mappaModal.present();
                break;
              case 8:
                mappaModal = obj_copy.create(Evento8Page);
                mappaModal.present();
                break;
              case 9:
                mappaModal = obj_copy.create(Evento9Page);
                mappaModal.present();
                break;
              case 10:
                mappaModal = obj_copy.create(Evento10Page);
                mappaModal.present();
                break;
              case 11:
                mappaModal = obj_copy.create(Evento11Page);
                mappaModal.present();
                break;
			case 12:
                mappaModal = obj_copy.create(Evento12Page);
                mappaModal.present();
                break;
			case 13:
                mappaModal = obj_copy.create(Evento13Page);
                mappaModal.present();
                break;
			case 14:
                mappaModal = obj_copy.create(Evento14Page);
                mappaModal.present();
                break;
			case 15:
                mappaModal = obj_copy.create(Evento15Page);
                mappaModal.present();
                break;
			case 16:
                mappaModal = obj_copy.create(Evento16Page);
                mappaModal.present();
                break;
			case 17:
                mappaModal = obj_copy.create(Evento17Page);
                mappaModal.present();
                break;
			case 18:
                mappaModal = obj_copy.create(Evento18Page);
                mappaModal.present();
                break;
			case 19:
                mappaModal = obj_copy.create(Evento19Page);
                mappaModal.present();
                break;
			case 20:
                mappaModal = obj_copy.create(Evento20Page);
                mappaModal.present();
                break;
			case 21:
                mappaModal = obj_copy.create(Evento21Page);
                mappaModal.present();
                break;
			case 22:
                mappaModal = obj_copy.create(Evento22Page);
                mappaModal.present();
                break;
				
              default:
                break;
            }


          }
        })(this.marker, i, obj_copy, location_copy));
      }
    }, 100);



  }

}
