import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompanyComponent } from './home-company.component';

const routes: Routes = [
  // TODO continue here start with nav company
  {path : '',component : HomeCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCompanyRoutingModule { }
