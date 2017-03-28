import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ShareModule } from "../share/share.module";

import { PagesComponent } from "./pages.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserSingleComponent } from "./user/user-single/user-single"


import { routing } from "./pages.routes"

@NgModule({
  imports:[
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ShareModule,
    routing
  ],
  declarations:[
    PagesComponent,
    LoginComponent,
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserSingleComponent
  ],
  providers:[

  ]
})

export class PagesModule{}
