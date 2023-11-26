import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NegotiationService } from '../shared/negotiation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {
  additionalInfoCompany: string;
  negotiation: any;

  additionalInfoUser: string;
  dateFromUserSuggestion: any;
  placeFromUserSuggestion: any;

  constructor(
    private config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private negotiationService: NegotiationService,
    private dialogRef: DynamicDialogRef,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {

  }
  ngOnInit() {
    this.negotiation = this.config.data;
    this.additionalInfoCompany = this.negotiation.additionalInfoCompany || 'No additional info';
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Copied to clipboard' });
  }

  confirmAccept(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.negotiationService.userAccept(this.negotiation).subscribe(res => {
          if (res) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Accepted, Status Updated' });
            this.dialogRef.close();
          }
        });
      },
      reject: () => {

      }
    });
  }
  confirmSuggest(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        if (this.dateFromUserSuggestion == null) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a date' });
        } else if (this.placeFromUserSuggestion == null) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please select a place' });
        } else {
          this.negotiation.dateFromTheUser.when = this.datePipe.transform(this.dateFromUserSuggestion, 'yyyy-MM-ddTHH:mm:ss.SSS');
          this.negotiation.dateFromTheUser.where = this.placeFromUserSuggestion.code;
          this.negotiation.additionalInfoUser = this.additionalInfoUser;

          this.negotiationService.userRequestChanges(this.negotiation).subscribe(res => {
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
}
