import { Component } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { User } from "../../../share/models/user";
import { UserServer } from "../../../share/services/user.service"

@Component({
  selector:"app-user-edit",
  templateUrl:"./user-edit.html"
})

export class UserEditComponent{
  user:User;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private server:UserServer,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    let id = this.route.snapshot.params["id"];
    this.server.getUser(id).subscribe(user => this.user = user);
  }

  edit(){
    this.server.update(this.user).subscribe(
      user => {
       this.successMessage = "更新成功";
        this.router.navigate(['/pages/users'])
      },
      err => {
        this.errorMessage = "更新失败"
      }
    )
  }

}

