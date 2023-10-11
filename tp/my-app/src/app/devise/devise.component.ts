import { Component } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent {

  devise = new Devise();
  message="";

  constructor(public deviseService : DeviseService){
  }
  
  onAjout(){
     this.deviseService.postDevise$(this.devise)
         .subscribe({
          next: (deviseSauvegardee)=> { this.message=JSON.stringify(deviseSauvegardee);},
          error: (err)=>{this.message=JSON.stringify(err);}
         });
  }

}
