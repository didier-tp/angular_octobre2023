import { Component } from '@angular/core';
import { Login, LoginResponse } from '../common/data/login';
import { LoginService } from '../common/service/login.service';
import { messageFromError } from '../common/util/util';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   //login = new Login();
   login = new Login("user1","pwd1","user");
   message = "";
   status = false;

   constructor(private loginService: LoginService,private router : Router){
      //injection de dépendance
   }

   onLoginV1(){
    //V1:
    //this.message="valeurs saisies=" + JSON.stringify(this.login);
    //V2:
    this.loginService.postLogin$(this.login).subscribe(
      {
        next: (loginResponse: LoginResponse) => {
          this.message=loginResponse.message;
          this.status = loginResponse.status;
        },
        error: (err) => {
          console.log("error:" + err);
          this.message = messageFromError(err, "echec login")
        }
      }
    );
   }

   async onLogin(){
      sessionStorage.setItem("authToken","");
      try{
        let loginResponse = await firstValueFrom( this.loginService.postLogin$(this.login));
        this.message=loginResponse.message;
        this.status = loginResponse.status;  
        sessionStorage.setItem("authToken",loginResponse.token);
        //this.router.navigate([ '/ngr-conversion']); //navigation possible par programmation
      }
      catch(err){
        console.log("error:" + err);
        this.message =  "echec login";
      }
   }
}
