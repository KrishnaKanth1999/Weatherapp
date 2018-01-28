
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
@Injectable()
 export class ProcessHTTPMsgService{
 
 public extractData(res: Response) {
    let body = res.json();
   console.log(body);
  return body || { };
  }

 
 }
export const baseURL="http://api.openweathermap.org/data/2.5/forecast?q=";
export const apiid="&appid=369fb96107ab346b44351ae7d37c1b40&units=metric";