import { Injectable } from '@angular/core';


/*
NB: avec angular 17, pour ne pas êtreembêté avec localStorage 
il faut ajouter 
"ssr": false,  "prerender": false 
dans angular.json près des lignes 72,73
  "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "ssr": false, 
              "prerender": false 
            }
*/

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  //public couleurFondPreferee :string = 'lightgrey';//v1 public
  //V2:
  private _couleurFondPreferee :string ;

  public get couleurFondPreferee(){
    return this._couleurFondPreferee;
  }

  public set couleurFondPreferee(c:string){
    this._couleurFondPreferee=c;
   if(localStorage)
        localStorage.setItem('preferences.couleurFond',c);
  }

  constructor() { 
    let c :string | null = 'lightgrey';
  
    if(localStorage)
         c= localStorage.getItem('preferences.couleurFond');
        
    this._couleurFondPreferee = c?c:'lightgrey';
  }


}
