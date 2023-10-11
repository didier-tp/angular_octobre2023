import { Injectable } from '@angular/core';
import { Login, LoginResponse } from '../data/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
    //injection de dépendance http
  }

  public postLogin$(login : Login) : Observable<LoginResponse>{
    //effectuer un appel en mode post 
    //page 74,75 de angular.pdf
  }

}
