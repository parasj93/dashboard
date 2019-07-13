import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  private _eventrUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  getEvents(){
    return this.http.get<any>(this._eventrUrl);
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl);
  }
}
