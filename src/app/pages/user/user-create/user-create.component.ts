import { Component } from "@angular/core";
import { Router } from "@angular/router"
import { User } from "../../../share/models/user";
import { UserServer } from "../../../share/services/user.service";

@Component({
  selector:"app-user-create",
  templateUrl:"./user-create.html"
})
export class UserCreateComponent{
  user:User = {name:"",username:"",avatar:""};
  successMessage:string = "";
  errorMessage:string = "";

  constructor(private _server:UserServer,private router:Router){}

  createUser(){
    this._server.create(this.user).subscribe(
      user => {
        this.successMessage = "User was created!";
        setTimeout(()=> {
          this.router.navigate(['/pages/users']);
        },3000)
      },
      err => {
        this.errorMessage = "Fail"
      }
    )
  }

}
