import { Component } from '@angular/core';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   login = new Login();
   message = "";
   onLogin(){
    //V1:
    this.message="valeurs saisies=" + JSON.stringify(this.login);
   }
}
