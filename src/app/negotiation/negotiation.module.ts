import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegotiationRoutingModule } from './negotiation-routing.module';
import { NegotiationComponent } from './negotiation.component';


@NgModule({
  declarations: [
    NegotiationComponent
  ],
  imports: [
    CommonModule,
    NegotiationRoutingModule
  ]
})
export class NegotiationModule { }
