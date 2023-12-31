import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, delay, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface ResConv{
  amount : number ,
  source : string ,
  target : string ,
  result: number
}


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

   //private _baseUrl = "https://www.d-defrance.fr/tp/devise-api";
   private _baseUrl = "/devise-api"; //via reverse-proxy de ng-serve ou autre

  //V1 (simulation)
  //V2 : appel de web service REST
  //URL=https://www.d-defrance.fr/tp/devise-api/public/devise

  //jeux de données (en dur) pour pré-version (simulation asynchrone)
  private devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9)
  ];

  /*
  //version 1 (simulation)
  public getAllDevises$() : Observable<Devise[]>{
      return of(this.devises) //version préliminaire (cependant asynchrone)
            .pipe(
               delay(111) //simuler une attente de 111ms 
            );
  }
  */

  constructor(private http :HttpClient){
    //injecte le service technique prédéfini HttpClient
    //dans le service "DeviseService"
  }
  
  //version 2 (vrai appel HTTP)
  public getAllDevises$() : Observable<Devise[]>{
   let wsURL=this._baseUrl + "/public/devise";
   return this.http.get<Devise[]>(wsURL)
              .pipe(
                map( (tabDevises) => tabDevises.sort( (d1,d2) => d1?d1.code.localeCompare(d2.code):0 ) )
              );  //transformer tableau pas trié en tableau trié
  }

  public postDevise$(devise :Devise) : Observable<Devise>{
    let wsURL=this._baseUrl + "/private/devise";
    return this.http.post<Devise>(wsURL,devise);
  }

  /*
  //V1 (simulation)
  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {
      let coeff =  Math.random();//coefficient aleatoire ici (simple simulation)
      let montantConverti = montant * coeff;                    
      return of(montantConverti) //version temporaire (cependant asynchrone)
            .pipe(
                 delay(222) //simuler une attente de 222ms 
            );
  }
  */

//V2 (vrai appel de WS)
public convertir$(montant: number,
  codeDeviseSrc : string, 
  codeDeviseTarget : string
  ) : Observable<number> {
    //let wsURL="https://www.d-defrance.fr/tp/devise-api/public/convert?source=EUR&target=USD&amount=50";
    let wsURL=`${this._baseUrl}/public/convert?source=${codeDeviseSrc}&target=${codeDeviseTarget}&amount=${montant}`;
   return this.http.get<ResConv>(wsURL)
                   .pipe(
                       map( (res:ResConv) => res.result )
                   );
  }

}
