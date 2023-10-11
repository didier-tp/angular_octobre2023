import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  public login : Login = new Login();
  public message :string ="";
  public onLogin(){
    /*
    //V1
     this.message = "donnees saisies = " + JSON.stringify(this.login);
     this.sessionService.username = this.login.username;
     this.sessionService.isConnected = true;
     */

     //V2: appeler loginService.postLogin$(this.login)
     //et selon le résultat mettre à jour le "message"
  }

  constructor(public sessionService : SessionService) {
    //injection de dépendance par constructeur
   }

  ngOnInit(): void {
  }
}
