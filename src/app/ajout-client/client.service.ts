import { Injectable } from '@angular/core';
import { Type } from '@angular/compiler';
import {  HttpClient } from '@angular/common/http';


export class Client {

  constructor(
    
 
    ) { }
  }
    @Injectable({
      providedIn: 'root'
    })


    export class ClientService {
    
      constructor(private http: HttpClient) { }
    
      Url = 'http://localhost:9000/formation';
      Url3 = 'http://localhost:9000/client/deleteclient';
      Url1 = 'http://localhost:9000/client/add';
      
    
    
    
      addClient(client: Client) {
        return this.http.post<Client>(this.Url1, client);
      }
    }