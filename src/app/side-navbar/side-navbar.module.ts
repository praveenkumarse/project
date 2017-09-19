import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesComponent } from './spaces/spaces.component';
import { SideNavbarComponent } from './../side-navbar/side-navbar.component';
import { TabViewModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: SideNavbarComponent,
    children: [
      { path: '', component: SpacesComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    FormsModule, 
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SpacesComponent,
    SideNavbarComponent
  ]
})
export class SideNavbarModule { }
