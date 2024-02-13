import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { delay, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

class ConvertRes {
    constructor(public amount:number=0,
                public source:string="",
                public target:string="",
                public result:number=0){}
}


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  baseUrl = "https://www.d-defrance.fr/tp/devise-api/public";

 constructor(private http: HttpClient){
 }

  public getAllDevises$() : Observable<Devise[]>{
     let url = this.baseUrl + "/devise";
     return this.http.get<Devise[]>(url);
  }

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {
    let url = this.baseUrl 
    + `/convert?source=${codeDeviseSrc}&target=${codeDeviseTarget}&amount=${montant}`;
    console.log("url="+url);
    return this.http.get<ConvertRes>(url).pipe(
      map((convertRes) => convertRes.result)
    );
  }

}

/*
V1 simulée:

//jeux de données (en dur) pour pré-version (simulation asynchrone)
  private devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9)
  ];

  public getAllDevises$() : Observable<Devise[]>{
      return of(this.devises) //version préliminaire (cependant asynchrone)
            .pipe(
               delay(111) //simuler une attente de 111ms 
            );
  }

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