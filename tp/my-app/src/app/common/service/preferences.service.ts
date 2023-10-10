import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public couleurFondPreferee : string = "lightgrey"; //V1 (public, sans get/set)

  constructor() { }
}
