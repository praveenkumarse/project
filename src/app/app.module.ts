import { NavbarModule } from './navbar/navbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule, ButtonModule,TabViewModule } from 'primeng/primeng';
import {ServicesService} from './services/services.service'

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'dashboard', loadChildren:'./navbar/navbar.module#NavbarModule'  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
