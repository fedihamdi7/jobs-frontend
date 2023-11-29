import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeCompanyRoutingModule } from './home-company-routing.module';
import { HomeCompanyComponent } from './home-company.component';
import { ToastModule } from 'primeng/toast';
import { CompanyNavComponent } from './company-nav/company-nav.component';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    HomeCompanyComponent,
    CompanyNavComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeCompanyRoutingModule,
    ToastModule,
    AvatarModule,
    ToastModule,
    DropdownModule,
    MenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    TooltipModule,
    DynamicDialogModule,
    InputNumberModule,
    CalendarModule,
    EditorModule,
    ReactiveFormsModule,
    ChipsModule,
    ListboxModule,
    TagModule
  ],
  providers :[DialogService,DatePipe]
})
export class HomeCompanyModule { }
