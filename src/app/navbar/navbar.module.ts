import { SideNavbarModule } from './../side-navbar/side-navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';


const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      { path: '', loadChildren: './../side-navbar/side-navbar.module#SideNavbarModule' }
    ]
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NavbarComponent
  ]
})
export class NavbarModule { }
