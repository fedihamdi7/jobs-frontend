import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-applied-in-posts',
  templateUrl: './applied-in-posts.component.html',
  styleUrl: './applied-in-posts.component.css'
})
export class AppliedInPostsComponent implements OnInit {
  @ViewChild('dt1') dt1: Table;

  negotiations: any[] = [];
  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.userService.getNegotiations().subscribe((res: any) => {
      console.log(res);
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
