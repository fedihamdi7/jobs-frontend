import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


// primeng Modules
import { ImageModule } from 'primeng/image';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { VerifyComponent } from './verify/verify.component';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [
    AuthComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // primeng Modules
    ImageModule,
    InputTextModule,
    PasswordModule,
    FileUploadModule,
    ButtonModule,
    InputSwitchModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    ToastModule,
    MessageModule,
  ],
  providers:[MessageService]
})
export class AuthModule { }
