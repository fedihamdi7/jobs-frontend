import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { NegotiationService } from 'src/app/shared/negotiation.service';
import { CompanyNegotiationOverlayComponent } from './company-negotiation-overlay/company-negotiation-overlay.component';
import { ApplicantOverlayComponent } from './applicant-overlay/applicant-overlay.component';

@Component({
  selector: 'app-company-negotiations',
  templateUrl: './company-negotiations.component.html',
  styleUrl: './company-negotiations.component.css'
})
export class CompanyNegotiationsComponent implements OnInit{
    @ViewChild('dt1') dt1: Table;
    refNegotiation: DynamicDialogRef | undefined;
    refApplicant: DynamicDialogRef | undefined;
    negotiations : any[];
    constructor(
      private negotiationService: NegotiationService,
      private dialogService: DialogService

    ) { }
  
    ngOnInit(): void {
      this.negotiationService.getNegotiationsByCompany().subscribe(
        (res : any) => {
          this.negotiations = res ;
          this.seeDetails(this.negotiations[0])
        },
        err => {
          console.log(err);
        }
      );
    }

    init(){
      this.negotiationService.getNegotiationsByCompany().subscribe((res: any) => {
        this.negotiations = res;      
     });
    }
    seeDetails(negotiation: any) {
      this.refNegotiation = this.dialogService.open(CompanyNegotiationOverlayComponent, {
        header: 'Negotiation Details',
        width: '60%',
        height: '90%',
        baseZIndex: 10000,
        data: negotiation,
        maximizable: true
      });
      this.refNegotiation.onDestroy.subscribe(() => {
        this.init();
      })
    }

    seeApplicantDetails(applicant: any) {      
      this.refApplicant = this.dialogService.open(ApplicantOverlayComponent, {
        header: 'Applicant Details',
        width: '90%',
        height: '95%',
        baseZIndex: 10000,
        data: applicant,
        maximizable: true
      });
      this.refApplicant.onDestroy.subscribe(() => {
        this.init();
      })
    }

    clear(table: Table) {
      table.clear();
    }

    onInputChange(event: any) {
      const inputValue = (event.target as HTMLInputElement).value;
      this.dt1.filterGlobal(inputValue, 'contains');
    }
  
    statuses = [
      { label: 'Pending', value: 'pending' },
      { label: 'Accepted', value: 'accepted' },
      { label: 'Rejected', value: 'rejected' },
      { label: 'Pending User Confirmation', value: 'pending_user_confirmation' },
      { label: 'Pending Company Confirmation', value: 'pending_company_confirmation' },
    ];

    getSeverity(status: string) {
      switch (status.toLowerCase()) {
        case 'pending':
          return 'warning';
  
        case 'accepted':
          return 'success';
  
        case 'rejected':
          return 'danger';
      }
      return 'info';
    }
    activityValues: number[] = [0, 100];
}
