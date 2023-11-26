import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegotiationRoutingModule } from './negotiation-routing.module';
import { NegotiationComponent } from './negotiation.component';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [
    NegotiationComponent,
  ],
  imports: [
    CommonModule,
    NegotiationRoutingModule,
    DividerModule,
    TagModule,
    InputTextModule,
    EditorModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,
    ConfirmPopupModule,
    RippleModule
  ],
  providers:[]
})
export class NegotiationModule { }
