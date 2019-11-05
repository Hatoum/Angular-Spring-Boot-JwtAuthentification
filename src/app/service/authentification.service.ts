import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


export class User{
  constructor(
    public status:string,
     ) {}
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private httpClient: HttpClient
  ) { }

 authenticate(username, password) {
      return this.httpClient.post<any>('http://localhost:9000/user/login', {username, password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
      );
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
