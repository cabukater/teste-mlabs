import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor( private http: HttpClient) {

   }

   getSocialNetworks(){
      return this.http.get('https://gentle-savannah-59272.herokuapp.com/social-network/data').pipe()
   }

   getSchedules(){
    return this.http.get('https://gentle-savannah-59272.herokuapp.com/schedules/data').pipe()

   }

  post(data){
    return this.http.post('https://gentle-savannah-59272.herokuapp.com/schedules-status/data', data).pipe()

   }
   getStatus(){
    return this.http.get('https://gentle-savannah-59272.herokuapp.com/schedules').pipe()

   }
}
