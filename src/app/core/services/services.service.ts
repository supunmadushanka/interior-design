import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices() {
    let _url = 'http://localhost:3000/services'
    return this.http.get<any>(_url);
  }

}
