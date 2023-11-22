import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeUserRoutingModule } from './home-user-routing.module';
import { HomeUserComponent } from './home-user.component';
import { ToastModule } from 'primeng/toast';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { NavComponent } from './nav/nav.component';
import { HomePostsComponent } from './home-posts/home-posts.component';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    HomeUserComponent,
    NavComponent,
    HomePostsComponent
  ],
  imports: [
    CommonModule,
    HomeUserRoutingModule,
    ToastModule,
    DataViewModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    DropdownModule,
    ChipModule,
    RippleModule,
    FormsModule,
    InputTextModule
  ]
})
export class HomeUserModule { }
