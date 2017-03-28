import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ShareModule } from "./share/share.module"

import { AppComponent } from './app.component';
import { PagesModule } from "./pages/pages.module";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    PagesModule,
    ShareModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
