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
  constructor(
    private config: DynamicDialogConfig,
    private confirmationService: ConfirmationService,
    private negotiationService : NegotiationService,
    private dialogRef: DynamicDialogRef,
    private messageService : MessageService
  ) { 
    
  }
  negotiation: any;
  ngOnInit() {
    this.negotiation = this.config.data;
    
  }
  // TODO add logic with backend
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
  additionalInfoCompany: string = `
  `;
  // negotiation = {
  //   "_id": "6560b82024fdf8eba271ba44",
  //   "user_id": "65571e3058e66cbe3e84aa8c",
  //   "company_id": {
  //     "_id": "6555f0cab19e1825b7ef617b",
  //     "name": "company 1"
  //   },
  //   "post_id": {
  //     "_id": "65587167efe08886ea9a7abd",
  //     "title": "post of company 1",
  //     "description": "desc1",
  //     "company": "6555f0cab19e1825b7ef617b",
  //     "numberOfAvailablePositions": 2,
  //     "typeOfEmployment": "CIVP",
  //     "applicants": 1,
  //     "dateOfCreation": "2023-11-18T09:10:15.703Z",
  //     "__v": 0,
  //     "levelOfStudy": "Bac+3",
  //     "salary": "1500",
  //     "experienceLevel": "0-1"
  //   },
  //   "status": "PENDING",
  //   "dateFromTheCompany": {
  //     "when": null,
  //     "where": null
  //   },
  //   "dateFromTheUser": {
  //     "when": null,
  //     "where": null
  //   },
  //   "agreedOnDate": {
  //     "when": null,
  //     "where": null
  //   },
  //   "link": null,
  //   "additionalInfoCompany": null,
  //   "additionalInfoUser": null,
  //   "creationDate": "2023-11-24T15:50:08.507Z",
  //   "__v": 0
  // };
}
