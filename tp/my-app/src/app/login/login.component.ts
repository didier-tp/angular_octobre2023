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
     this.message = "donnees saisies = " + JSON.stringify(this.login);
     this.sessionService.username = this.login.username;
     this.sessionService.isConnected = true;
  }

  constructor(public sessionService : SessionService) {
    //injection de dépendance par constructeur
   }

  ngOnInit(): void {
  }
}
