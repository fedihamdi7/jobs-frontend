import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeUserRoutingModule } from './home-user-routing.module';
import { HomeUserComponent } from './home-user.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    HomeUserRoutingModule,
    ToastModule
  ]
})
export class HomeUserModule { }
