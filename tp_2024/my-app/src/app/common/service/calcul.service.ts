import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  addition(a:number,b:number):number{
    return a+b;
  }

  constructor() { }
}
