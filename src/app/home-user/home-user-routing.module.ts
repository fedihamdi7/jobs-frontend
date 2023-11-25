import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeUserComponent } from './home-user.component';
import { AppliedInPostsComponent } from './applied-in-posts/applied-in-posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: NavComponent, children: [
      { path: 'home', component: HomeUserComponent },
      { path : 'post/:id', loadChildren : () => import('../post/post.module').then(m => m.PostModule)},
      { path : 'my-posts', component : AppliedInPostsComponent},
      { path : 'negotiation', loadChildren : () => import('../negotiation/negotiation.module').then(m => m.NegotiationModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeUserRoutingModule { }
