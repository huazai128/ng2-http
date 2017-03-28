import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../share/services/auth.service";


@Component({
  selector:"app-login",
  templateUrl:"./login.html"
})

export class LoginComponent{
  loginForm = { username:"",password:""};
  successMessage:string = "";
  errorMessage:string = '';

  constructor(private router:Router,private _server:AuthService){

  }

  login(){
    console.log("=====");
    if(this.loginForm.username && this.loginForm.password){
      this._server.login(this.loginForm.username,this.loginForm.password).subscribe(
        data => {
          console.log(data);
          this.router.navigate([''])
        },
        err => {
          console.log(err);
          this.errorMessage = err;
        }
      )
    }

  }
}
