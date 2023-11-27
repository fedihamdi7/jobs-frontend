import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../shared/local-storage.service';
import { PostService } from '../post/post.service';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostDetailsComponent } from './post-details/post-details.component';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrl: './home-company.component.css'
})
export class HomeCompanyComponent implements AfterViewInit, OnInit {
  @ViewChild('dt1') dt1: Table;
  
  isFromAuthGuard = false;
  company : any;
  posts : any[];
  refDetails: DynamicDialogRef | undefined;
  refEdit: DynamicDialogRef | undefined;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private localStorage: LocalStorageService,
    private postService : PostService,
    public dialogService: DialogService


  ) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      if (this.router.getCurrentNavigation()?.extras?.state['redirectedFromAuthGuard']) {        
        this.isFromAuthGuard = true;
      }
    }
    if (history.state) {
      history.replaceState({}, '', this.router.url.split('?')[0]);
    }
  }

  ngAfterViewInit(): void {
    if (this.isFromAuthGuard) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You are already logged in' });
    }
  }

  ngOnInit(): void {
    this.company = this.localStorage.getUser();
    this.postService.findAllPostsOfCompany(this.company._id).subscribe(
      (res : any) => {
        console.log(res);
        this.posts= res;       
        this.seeEdit(this.posts[0])
      },
      (err) => {
        console.log(err);
      }
    )

  }
  seeDetails(post){
    this.refDetails = this.dialogService.open(PostDetailsComponent, { header: 'Post Details',data : {post,"isEdit" :false},maximizable: true});
  }

  seeEdit(post){
    this.refDetails = this.dialogService.open(PostDetailsComponent, { header: 'Post Details',data : {post,"isEdit" :true},maximizable: true});

  }
  clear(table: Table) {
    table.clear();
  }
  onInputChange(event: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }

}
