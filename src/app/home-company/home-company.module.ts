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
    DividerModule
  ]
})
export class HomeCompanyModule { }
