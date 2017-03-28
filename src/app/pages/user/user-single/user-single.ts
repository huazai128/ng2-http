import { Component } from "@angular/core";
import { Router,ActivatedRoute  } from "@angular/router";
import { User } from "../../../share/models/user";
import { UserServer } from "../../../share/services/user.service";

@Component({
  selector:"app-user-single",
  templateUrl:"user-single.html"
})

export class UserSingleComponent{
  user:User;
  constructor(private router:Router,private route:ActivatedRoute,private server:UserServer){}

  ngOnInit(){
    let id =  this.route.snapshot.params['id'];
    this.server.getUser(id).subscribe(
      user => this.user = user
    )
  }

  deleteUser(){
    this.server.delete(this.user.id).subscribe(
      data => {
        this.router.navigate(['/pages/users']);
      }
    )
  }
}
