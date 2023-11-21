import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsNotAuthGuard } from './guards/is-not-auth.guard';

const routes: Routes = [
  {path : '' , redirectTo : 'auth' , pathMatch : 'full'},
  {path : 'auth' , loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [IsNotAuthGuard]},
  {path : "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
