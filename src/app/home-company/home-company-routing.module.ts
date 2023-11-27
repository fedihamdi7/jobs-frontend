import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompanyComponent } from './home-company.component';
import { CompanyNavComponent } from './company-nav/company-nav.component';

const routes: Routes = [
  {path : '',redirectTo :'c-home',pathMatch : 'full'},
  {
    path : '',component: CompanyNavComponent, children :[
      {path : 'c-home', component : HomeCompanyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCompanyRoutingModule { }
