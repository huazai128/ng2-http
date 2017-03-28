import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService{

  private authUrl:string = "https://reqres.in/api";
  private loggedIn:boolean = false;

  constructor(private http:Http){
    this.loggedIn = !!localStorage.getItem("auth_token"); //获取
    console.log(this.loggedIn);
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  //登录
  login(username:string,password:string):Observable<string> {
    return this.http.post(`${this.authUrl}/login`,{username:username,password:password})
      .map(res => res.json())
      .do(res => {  //用于处理各种Observable的生命周期
        if(res.token){
          localStorage.setItem("auth_token",res.token);//设置缓存信息
          this.loggedIn = true;
        }
      })
      .catch(this.handleError)
  }

  //退出登录
  logout():void{
    localStorage.removeItem("auth_token"); //删除缓存
  }

  gitToken(){
    return localStorage.getItem("auth_token");
  }

  private handleError(err){
    let errMessage:string;
    if(err instanceof Response){
      let body =  err.json() || "";
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`
    }else{
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }
}
