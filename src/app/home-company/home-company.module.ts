import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    HomeCompanyComponent,
    CompanyNavComponent
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
    RippleModule
  ]
})
export class HomeCompanyModule { }
