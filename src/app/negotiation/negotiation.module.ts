import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegotiationRoutingModule } from './negotiation-routing.module';
import { NegotiationComponent } from './negotiation.component';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    NegotiationComponent,
  ],
  imports: [
    CommonModule,
    NegotiationRoutingModule,
    DividerModule,
    TagModule
  ]
})
export class NegotiationModule { }
