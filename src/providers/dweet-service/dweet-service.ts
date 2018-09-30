import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content} from '../../models/content';
import { Dweet} from '../../models/dweet';
import { With} from '../../models/with';
import { DweetSettingsEnum } from '../../enum/DweetSettingsEnum';


/*
  Generated class for the DweetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DweetServiceProvider {

  private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  

  constructor(public http: HttpClient) {
    console.log('Hello DweetServiceProvider Provider');
  }

  loadLastDweets(thingName : string){
    return this.http.get(this.dweetioApiUrl + thingName); 
  }

  patchDweet (body : any , thingName : string){
    return this.http.post(this.dweetioApiUrl + thingName , body );
  }

  preencherDweet ( data : any){
    let dweet : Dweet ;
    let _withs : Array<With>;
    let _date : string ;
    let _time : string ;

    _withs = new Array<With>();

    for(let _with of data.with){
      
      let tempContent : Content ;
      tempContent = new Content(_with.content.temperatura , _with.content.luminosidade);

      _date = this.formatDate (_with.created);
      _time = this.formatTime (_with.created);

      let tempWith : With ;

      tempWith = new With(_with.thing , _with.created , tempContent , _date , _time);
      _withs.push(tempWith);

    }

    dweet = new Dweet(data.this , data.by , data.the , _withs);
    console.log(dweet);
    return dweet ;

  }

  public formatDate (date : any){
    let originalDate : string  = date ;
    var dateParse = originalDate.slice (0,10);
    return dateParse;

  }

  public formatTime (date : any){
    let originalDate : string  = date ;
    var timeParse = originalDate.slice(11,19);
    return timeParse ;

  }




}
