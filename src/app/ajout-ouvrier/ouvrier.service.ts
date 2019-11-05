import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Type } from '@angular/compiler';


export class Ouvrier {
  constructor(
    public id: number,
    
    public moyenne: Float32List,
    public Typedouvrier: Type,

  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  constructor(private http: HttpClient) { }
  Url1 = 'http://localhost:9000/ouvrier/addouvrier';
 
 

  addOuvrier(ouvrier: Ouvrier) {
    return this.http.post<Ouvrier>(this.Url1, ouvrier);
  }
  
 
}



