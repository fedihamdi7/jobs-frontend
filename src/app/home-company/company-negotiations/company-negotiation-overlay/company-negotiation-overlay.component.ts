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
    private dialogRef: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    this.negotiation = this.config.data;
    console.log(this.config.data);

  }

  confirmAccept(event: Event) {}

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
  
}
