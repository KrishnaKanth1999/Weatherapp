import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import{ProcessHTTPMsgService,baseURL,apiid} from './restConfig';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()


export class weatherService {

  constructor(private http:Http,private processHTTPMsgService:ProcessHTTPMsgService ) { }

getData(city:string):Observable<any>{

return this.http.get(baseURL+city+apiid).map(res => { return this.processHTTPMsgService.extractData(res); });
}

getCountries():Observable<any>{
return this.http.get("https://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.json").map(res => { return this.processHTTPMsgService.extractData(res); });

}
}
