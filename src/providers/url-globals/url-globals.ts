import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UrlGlobalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlGlobalsProvider {
  public url_list: any[];
  public stage_mode: String = 'staging';
  public default_domain: String;
  public app_language: String;
  public this_folder_add: String;
  constructor() {
    /////
    this.app_language = this.get_user_language();

    if (this.stage_mode == "local") {
      this.default_domain = "http://192.168.1.100";
      this.stage_mode = "staging";
      this.this_folder_add = "/congressi/";

    }
    if (this.stage_mode == "staging") {

      this.default_domain = "https://www.gotocongress.eu";
      this.stage_mode = "staging";
      this.this_folder_add = "/";
    }
    if (this.stage_mode == "production") {
      this.stage_mode = "prod";
      this.default_domain = "http://192.168.1.100";
      this.this_folder_add = "/";
    }

    this.url_list = [

      { "login_url": this.default_domain + "" + this.this_folder_add + "api/" + this.app_language + "/" + this.stage_mode + "/login/" },
      { "logout_url": this.default_domain + "" + this.this_folder_add + "api/" + this.app_language + "/" + this.stage_mode + "/logout/" },
      { "prenotazione_url": this.default_domain + "" + this.this_folder_add + "api/" + this.app_language + "/" + this.stage_mode + "/prenotazione/" }

    ];


  }

  get_user_language() {

    return "it_IT";

  }

  loadUrl() {

    return Promise.resolve(this.url_list);

  }
}
