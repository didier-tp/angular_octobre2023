import { Injectable } from '@angular/core';
import { Login, LoginResponse } from '../data/login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl = "https://www.d-defrance.fr/tp/standalone-login-api";

  constructor(private http: HttpClient) { 
    //injection de dépendance http
  }

  public postLogin$(login : Login) : Observable<LoginResponse>{
    let wsURL =this._baseUrl + "/public/auth";
    return this.http.post<LoginResponse>(wsURL,login);
  }

}
