import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindLayoutComponent } from './find-layout.component'
import { RouterModule } from '@angular/router';
import { FindLayoutRoutes } from './find-layout.routing'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SearchDevsComponent } from 'src/app/components/search-devs/search-devs.component';




@NgModule({
  declarations: [ 
    FindLayoutComponent, 
    NavbarComponent,
    HomeComponent,
    SearchDevsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FindLayoutRoutes),
  ]
})
export class FindLayoutModule { }
