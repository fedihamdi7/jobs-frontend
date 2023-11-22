import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCompanyRoutingModule } from './home-company-routing.module';
import { HomeCompanyComponent } from './home-company.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    HomeCompanyComponent
  ],
  imports: [
    CommonModule,
    HomeCompanyRoutingModule,
    ToastModule
  ]
})
export class HomeCompanyModule { }
