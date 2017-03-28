import { NgModule,ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { AuthService } from "./services/auth.service";
import { UserServer } from "./services/user.service";

//rxjs操作符
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


const PROVIDERS = [
  AuthService,
  UserServer
]

@NgModule({
  imports:[
    CommonModule,
    HttpModule
  ]
})

export class ShareModule{
  static forRoot():ModuleWithProviders{
    return <ModuleWithProviders>{
      ngModule: ShareModule,
      providers: [  //数据服务注入
        ...PROVIDERS
      ],
    }
  }
}


