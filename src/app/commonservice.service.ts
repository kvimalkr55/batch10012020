import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient) {

   }

   getClients(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
    

   }
}
