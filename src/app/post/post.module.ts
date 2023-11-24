import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    DividerModule,
    ButtonModule,
    TooltipModule,
    MessageModule
  ],
  providers:[MessageService]
})
export class PostModule { }
