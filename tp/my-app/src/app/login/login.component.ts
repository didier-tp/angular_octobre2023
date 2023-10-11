import { Component, OnInit } from '@angular/core';
import { Login, LoginResponse } from '../common/data/login';
import { SessionService } from '../common/service/session.service';
import { LoginService } from '../common/service/login.service';

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
     this.loginService.postLogin$(this.login)
         .subscribe({ next:  (loginResp : LoginResponse) => { this.analyserLoginResponse(loginResp)} ,
                      error : (err) =>  { this.message="une erreur technique a eu lieu ..." +JSON.stringify(err)}
                    });

                        
  }

  analyserLoginResponse(loginResp : LoginResponse){
      this.message = loginResp.message;
      this.sessionService.isConnected=loginResp.status;
      if(loginResp.status)
           this.sessionService.username = this.login.username;
      else
           this.sessionService.username = "? (not authenticated)";
  } 

  constructor(public sessionService : SessionService,
              private loginService: LoginService ) {
    //injection de dépendance par constructeur
   }

  ngOnInit(): void {
  }
}
