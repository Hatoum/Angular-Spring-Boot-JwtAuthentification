import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type 
} from '@angular/compiler';


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
  Url = 'http://localhost:9090/ouvrier/deleteouvrier';
  constructor(private http: HttpClient) { }
  getOuvrier() {
    return this.http.get<Ouvrier[]>('http://localhost:9090/ouvrier/allouvrier');
  }
  deleteOuvrier(ouvrier: Ouvrier) {
    return this.http.delete<Ouvrier>(this.Url + '/' + ouvrier.id);
  }
  addOuvrier() {
  }
}


