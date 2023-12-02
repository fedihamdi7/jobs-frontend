import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeCompanyRoutingModule } from './home-company-routing.module';
import { HomeCompanyComponent } from './home-company.component';
import { ToastModule } from 'primeng/toast';
import { CompanyNavComponent } from './company-nav/company-nav.component';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PostDetailsComponent } from './post-details/post-details.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { ListboxModule } from 'primeng/listbox';
import { TagModule } from 'primeng/tag';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { MessageModule } from 'primeng/message';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { CompanyNegotiationsComponent } from './company-negotiations/company-negotiations.component';
import { StatusPipe } from '../pipes/status.pipe';
import { ConfirmationService } from 'primeng/api';
import { CompanyNegotiationOverlayComponent } from './company-negotiations/company-negotiation-overlay/company-negotiation-overlay.component';
import { ApplicantOverlayComponent } from './company-negotiations/applicant-overlay/applicant-overlay.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    HomeCompanyComponent,
    CompanyNavComponent,
    PostDetailsComponent,
    EditCompanyComponent,
    CompanyNegotiationsComponent,
    CompanyNegotiationOverlayComponent,
    ApplicantOverlayComponent
  ],
  imports: [
    CommonModule,
    HomeCompanyRoutingModule,
    ToastModule,
    AvatarModule,
    ToastModule,
    DropdownModule,
    MenuModule,
    DividerModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    TooltipModule,
    DynamicDialogModule,
    InputNumberModule,
    CalendarModule,
    EditorModule,
    ReactiveFormsModule,
    ChipsModule,
    ListboxModule,
    TagModule,
    MessageModule,
    FileUploadModule,
    InputMaskModule,
    PasswordModule,
    HttpClientModule,
    FormsModule,
    StatusPipe,
    SafeUrlPipe,
    EditorModule,
    ConfirmPopupModule,
    BadgeModule,
    OverlayPanelModule
    
  ],
  providers :[DialogService,DatePipe,ConfirmationService]
})
export class HomeCompanyModule { }
