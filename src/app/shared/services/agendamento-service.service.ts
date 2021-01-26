import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor( private http: HttpClient) {

   }

   getSocialNetworks(){
      return this.http.get('https://run.mocky.io/v3/68eee789-feb0-45b6-8a7b-40f80d855ac1/data').pipe()
   }

   getSchedules(){
    return this.http.get('https://run.mocky.io/v3/e3f56f44-bbc4-4a0d-a9e2-c5aa9c82a9a0/data').pipe()

   }

  post(data){
    return this.http.post('https://run.mocky.io/v3/e3f56f44-bbc4-4a0d-a9e2-c5aa9c82a9a0', data).pipe()

   }
   getStatus(){
    return this.http.get('https://run.mocky.io/v3/4df33f8f-8339-4e1f-845a-b80125be741f/data').pipe()

   }
}
