import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserEditComponent } from "./user/user-edit/user-edit.component";
import { UserSingleComponent } from "./user/user-single/user-single";


const routes:Routes = [
  {
    path:"pages",
    component:PagesComponent,
    children:[
      {path:"",redirectTo:"users",pathMatch:"full"},
      {path:"login",component:LoginComponent},
      {path:"users",component:UserComponent,children:[
        {path:"",redirectTo:"list",pathMatch:"full"},
        {path:"list",component:UserListComponent},
        {path:"create",component:UserCreateComponent},
        {path:":id",component:UserSingleComponent},
        {path:":id/edit",component:UserEditComponent}
      ]}
    ]
  }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
