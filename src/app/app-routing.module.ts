import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';
import { IsAuthGuard } from './guards/is-auth.guard';
import { isCompanyGuard } from './guards/is-company.guard';
import { isUserGuard } from './guards/is-user.guard';

const routes: Routes = [
  {path : '' , redirectTo : 'auth' , pathMatch : 'full'},
  {path : 'auth' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [IsNotAuthGuard]},
  {path : 'home-user', loadChildren : () => import('./home-user/home-user.module').then(m => m.HomeUserModule),canActivate: [IsAuthGuard,isUserGuard]},
  {path : 'home-company', loadChildren : () => import('./home-company/home-company.module').then(m => m.HomeCompanyModule),canActivate: [IsAuthGuard,isCompanyGuard]},
  {path : "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
