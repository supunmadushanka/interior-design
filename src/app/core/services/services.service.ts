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

  addServices(service: any) {
    let _url = 'http://localhost:3000/services'
    return this.http.post<any>(_url, service);
  }

  editServices(id: any, service: any) {
    let _url = 'http://localhost:3000/services'
    return this.http.put<any>(`${_url}/${id}`, service);
  }

  deleteServices(id: string) {
    let _url = 'http://localhost:3000/services'
    return this.http.delete<any>(`${_url}/${id}`);
  }

}
