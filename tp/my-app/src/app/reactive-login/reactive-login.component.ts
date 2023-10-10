import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../common/data/login';


@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm! : FormGroup; //nécessite ReactiveFormsModule dans app.module.ts

 ngOnInit() {
  /*
    //V1 sans FormBuilder
    this.loginForm = new FormGroup({
      username: new FormControl('admin1', [ Validators.required,  Validators.pattern("^[a-zA-Z].+") ] ),
      password: new FormControl( 'pwdadmin1', [Validators.required, Validators.minLength(3) ] ),
      roles: new FormControl('admin',[ Validators.required])
    });
    */
    this.loginForm = this._formBuilder.group({
      username: ['admin1', [ Validators.required,  Validators.pattern("^[a-zA-Z].+") ]],
      password: ['pwdadmin1', [Validators.required, Validators.minLength(3) ]],
      roles: ['admin', [Validators.required]]
      });
 }

  public message :string ="";

  public onLogin(){
  
     this.message = "donnees saisies = " + JSON.stringify(this.loginForm.value); //V1
   
  }

  

  constructor(private _formBuilder: FormBuilder) {
     //injection de dépendance
   }

  

}
