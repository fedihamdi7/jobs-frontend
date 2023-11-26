import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NegotiationService } from '../shared/negotiation.service';

@Component({
  selector: 'app-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrl: './negotiation.component.css'
})
export class NegotiationComponent implements OnInit {
  additionalInfoCompany: string;
  negotiation: any;

  constructor(
    private config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private negotiationService : NegotiationService,
    private dialogRef: DynamicDialogRef,
    private messageService : MessageService
  ) { 
    
  }
  ngOnInit() {
    this.negotiation = this.config.data;
    this.additionalInfoCompany = this.negotiation.additionalInfoCompany || 'No additional info';
  }

  copyToClipboard(text :string ){
    navigator.clipboard.writeText(text);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Copied to clipboard'});
  }

  confirmAccept(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.negotiationService.userAccept(this.negotiation).subscribe(res =>{
          if(res){
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Accepted, Status Updated'});
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

      },
      reject: () => {

      }
    });
  }
}
