import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NegotiationService } from 'src/app/shared/negotiation.service';

@Component({
  selector: 'app-company-negotiation-overlay',
  templateUrl: './company-negotiation-overlay.component.html',
  styleUrl: './company-negotiation-overlay.component.css'
})
export class CompanyNegotiationOverlayComponent implements OnInit {
  additionalInfoCompany: string;
  placeFromCompanySuggestion: any;
  dateFromCompanySuggestion: any;

  negotiation : any;
  constructor(
    private config: DynamicDialogConfig,
    private negotiationService: NegotiationService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogRef: DynamicDialogRef,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.negotiation = this.config.data;
    console.log(this.config.data);

  }

  confirmAccept(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed? You want be able to act again!!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.dateFromCompanySuggestion == null) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a date' });
        } else if (this.placeFromCompanySuggestion == null) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a place' });
        } else {
          this.negotiation.dateFromTheCompany.when = this.datePipe.transform(this.dateFromCompanySuggestion, 'yyyy-MM-ddTHH:mm:ss.SSS');
          this.negotiation.dateFromTheCompany.where = this.placeFromCompanySuggestion.code;
          this.negotiation.additionalInfoCompany = this.additionalInfoCompany;

          this.negotiationService.companyAccepts(this.negotiation).subscribe(res => {
            if (res) {
              this.messageService.add({ severity: 'info', summary: 'Changes Sent', detail: 'Status Updated' });
              this.dialogRef.close();
            }
          });
        }
      },
      reject: () => {

      }
    });
  }

  decline(event : Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed? You want be able to act again!!',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.negotiationService.companyReject(this.negotiation).subscribe(res => {
          if (res) {
            this.messageService.add({ severity: 'info', summary: 'Operation Success', detail: 'Application Declined' });
            this.dialogRef.close();
          }
        });
      },
      reject: () => {

      }
    });
  }
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Copied to clipboard' });
  }
  
}
