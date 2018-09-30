import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TemperaturaPage} from '../temperatura/temperatura';
import {LuminosidadePage} from '../luminosidade/luminosidade';

import { DweetSettingsEnum } from '../../enum/DweetSettingsEnum';
import { DweetServiceProvider } from '../../providers/dweet-service/dweet-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  private thingName:any ;
  private body : any ;
  private alarme : any ;


  constructor(public navCtrl: NavController , private dweetService : DweetServiceProvider) {
  }

  ngOnInit (){
    this.thingName = DweetSettingsEnum.DWEET_THING_NAME_BUZZ ;
  }

  goToTempPage(){
    this.navCtrl.push(TemperaturaPage);    
  }

  goToLumiPage(){
    this.navCtrl.push(LuminosidadePage);    
  }

  changeAlarme(){
    var alarmeContent = this.alarme ? "com alarme" : "sem alarme";
    this.body = {status_alarme:alarmeContent};
    console.log(this.body);
    this.dweetService.patchDweet(this.body,this.thingName).subscribe();
    
  }


}
