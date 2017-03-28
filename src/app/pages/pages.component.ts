import { Component } from "@angular/core";
import { Router } from "@angular/router"
import { AuthService } from "../share/services/auth.service";

@Component({
  selector:"app-pages",
  templateUrl:"./pages.html"
})

export class PagesComponent{
  token:any;
  constructor(private _server:AuthService,private router:Router){}

  get isLoggedIn(){
    return this._server.isLoggedIn();
  }

  ngOnInit(){
    //已经获取token
    this.token = this._server.gitToken();
  }

  logout(){
    this._server.logout();
    this.router.navigate(['/pages/login']);
  }

}
