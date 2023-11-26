import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { HttpClientModule } from '@angular/common/http';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppliedInPostsComponent } from './applied-in-posts/applied-in-posts.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { StatusPipe } from '../pipes/status.pipe';
import { ConfirmationService } from 'primeng/api';
@NgModule({
  declarations: [
    HomeUserComponent,
    NavComponent,
    HomePostsComponent,
    AppliedInPostsComponent
  ],
  imports: [
    CommonModule,
    HomeUserRoutingModule,
    HttpClientModule,
    ToastModule,
    DataViewModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    DropdownModule,
    ChipModule,
    RippleModule,
    FormsModule,
    InputTextModule,
    DynamicDialogModule,
    NgScrollbarModule,
    TableModule,
    TagModule,
    MultiSelectModule,
    StatusPipe
  ],
  providers: [DialogService,ConfirmationService,DatePipe]
})
export class HomeUserModule { }
