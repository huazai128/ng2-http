import { Injectable } from "@angular/core";
import { Http,Response,Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { User } from "../models/user";


@Injectable()
export class UserServer{
  private userUrl:string = "https://reqres.in/api/users";
  private createUser =  new Subject<User>();
  private deleteUser = new Subject();
  //asObservable():将其他对象和数据类型转换为Observable;
  createUser$ = this.createUser.asObservable();
  deleteUser$ = this.deleteUser.asObservable();

  constructor(private http:Http){}

  //获取所有的用户
  getUsers():Observable<User[]>{
    return this.http.get(this.userUrl)
      .map(res => res.json().data)
      .map(users => users.map(this.toUser))
      .catch(this.handleError)
  }

  //创建用户
  create(user:User):Observable<User>{
    return this.http.post(this.userUrl,user)
      .map(res => res.json())
      .do(user => this.userCreated(user))
      .catch(this.handleError)
  }

  //根据ID获取用户信息
  getUser(id:number):Observable<User>{
    let headers = new Headers();
    let token = localStorage.getItem("auth_token");
    headers.append("Content-Type","application/json");
    headers.append("Authorization",`Bearer ${token}`);
    return this.http.get(`${this.userUrl}/${id}`)
      .map(res => res.json().data)
      .map(this.toUser)
      .catch(this.handleError)
  }


  //更新用户信息
  update(user:User):Observable<User>{
    return this.http.put(`${this.userUrl}/${user.id}`,user)
      .map(res => res.json())
      .catch(this.handleError)
  }


  //删除
  delete(id):Observable<any>{
    return this.http.delete(`${this.userUrl}/${id}`)
      .do(res => this.deletedUser())
      .catch(this.handleError)
  }
  private toUser(user):User{
    return {
      id:user.id,
      name:`${user.first_name} ${user.last_name}`,
      username:user.first_name,
      avatar:user.avatar
    }
  }

  userCreated(user:User){
    this.createUser.next(user);
  }

  deletedUser(){
    this.deleteUser.next()
  }


  private handleError(err){
    let errMessage:string;
    if(err instanceof Response){
      console.log(err);
      let body = err.json() || "";
      let error = body.error || JSON.stringify(body);
      errMessage = err.status + "-" + (err.statusText || '') + error;
      console.log(errMessage);
    }else{
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage)
  }
}
