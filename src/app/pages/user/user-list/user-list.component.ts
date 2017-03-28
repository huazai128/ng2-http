import { Component } from "@angular/core";
import { User } from "../../../share/models/user"
import { UserServer } from "../../../share/services/user.service";


@Component({
  selector:"app-user-list",
  templateUrl:"./user-list.html",
  styles:[
    `.user-card{cursor: pointer;}`
  ]
})

export class UserListComponent{
  users:User[];
  constructor(private _server:UserServer){}
  ngOnInit(){
    this._server.getUsers().subscribe(users => this.users = users);
  }
}
