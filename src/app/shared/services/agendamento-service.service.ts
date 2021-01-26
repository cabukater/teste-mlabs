import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor( private http: HttpClient) {

   }

   getSocialNetworks(){
      return this.http.get(' http://localhost:3800/data').pipe()
   }

   getSchedules(){
    return this.http.get(' http://localhost:3000/data').pipe()

   }

  post(data){
    return this.http.post(' http://localhost:3004/data', data).pipe()

   }
   getStatus(){
    return this.http.get(' http://localhost:3004/data').pipe()

   }
}
