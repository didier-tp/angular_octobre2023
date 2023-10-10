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
   let wsURL="https://www.d-defrance.fr/tp/devise-api/public/devise";
   return this.http.get<Devise[]>(wsURL);
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

//V1 (simulation)
public convertir$(montant: number,
  codeDeviseSrc : string, 
  codeDeviseTarget : string
  ) : Observable<number> {
    //let wsURL="https://www.d-defrance.fr/tp/devise-api/public/convert?source=EUR&target=USD&amount=50";
    let wsURL=`https://www.d-defrance.fr/tp/devise-api/public/convert?source=${codeDeviseSrc}&target=${codeDeviseTarget}&amount=${montant}`;
   return this.http.get<ResConv>(wsURL)
                   .pipe(
                    map( (res:ResConv) => res.result )
                   );
  }

}
