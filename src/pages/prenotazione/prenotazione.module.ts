import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrenotazionePage } from './prenotazione';

@NgModule({
  declarations: [
    PrenotazionePage,
  ],
  imports: [
    IonicPageModule.forChild(PrenotazionePage),
  ],
})
export class PrenotazionePageModule { }
