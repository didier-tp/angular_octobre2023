import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

public add(x:number , y : number){
   return x+y;
}

//public couleurFondPreferee :string = 'lightgrey'; //v1 : public
private _couleurFondPreferee :string ="?"; //v2 : private + get/set + localStorage

public get couleurFondPreferee(){
    return this._couleurFondPreferee;
}
public set couleurFondPreferee(c:string){
   this._couleurFondPreferee=c;
   localStorage.setItem('preferences.couleurFond',c);
}
constructor() {
   const c = localStorage.getItem('preferences.couleurFond');
   this._couleurFondPreferee = c?c:'lightgrey';
}
}
