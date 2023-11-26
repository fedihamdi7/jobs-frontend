import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NegotiationComponent } from 'src/app/negotiation/negotiation.component';

@Component({
  selector: 'app-applied-in-posts',
  templateUrl: './applied-in-posts.component.html',
  styleUrl: './applied-in-posts.component.css'
})
export class AppliedInPostsComponent implements OnInit {
  @ViewChild('dt1') dt1: Table;
  ref: DynamicDialogRef | undefined;

  negotiations: any[] = [];
  constructor(
    private userService: UserServiceService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.userService.getNegotiations().subscribe((res: any) => {
      this.negotiations = res;      
      this.seeDetails(this.negotiations[0]);
   });
  }

  init(){
    this.userService.getNegotiations().subscribe((res: any) => {
      this.negotiations = res;      
   });
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

  seeDetails(negotiation: any) {
    this.ref = this.dialogService.open(NegotiationComponent, {
      header: 'Negotiation Details',
      width: '90%',
      height: '90%',
      baseZIndex: 10000,
      data: negotiation,
      maximizable: true
    });
    this.ref.onDestroy.subscribe(() => {
      this.init();
    })
  }


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
