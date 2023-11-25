import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegotiationComponent } from './negotiation.component';

const routes: Routes = [
  {path : '' , component : NegotiationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegotiationRoutingModule { }
