import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../shared/local-storage.service';
import { PostService } from '../post/post.service';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrl: './home-company.component.css'
})
export class HomeCompanyComponent implements OnInit {
  @ViewChild('dt1') dt1: Table;

  company: any;
  posts: any[];
  refDetails: DynamicDialogRef | undefined;
  refEdit: DynamicDialogRef | undefined;
  refAdd: DynamicDialogRef | undefined;
  refEditCompany: DynamicDialogRef | undefined;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private localStorage: LocalStorageService,
    private postService: PostService,
    public dialogService: DialogService,
    private companyService: CompanyService

  ) {
    if (history.state) {
      history.replaceState({}, '', this.router.url.split('?')[0]);
    }
  }


  ngOnInit(): void {
    this.companyService.getCompany(this.localStorage.getUser()._id).subscribe((res) => {
      this.company = res;      
      for (let link in this.company.links) {
        
          if (!this.company.links[link]?.startsWith("http://") && !this.company.links[link]?.startsWith("https://") && this.company.links[link]) {
            this.company.links[link] = "http://" + this.company.links[link];
          }
      }
    
    })
    this.postService.findAllPostsOfCompany(this.localStorage.getUser()._id).subscribe(
      (res: any) => {
        this.posts = res;
      },
      (err) => {
        console.log(err);
      }
    )

  }

  getCompany() {
    this.companyService.getCompany(this.localStorage.getUser()._id).subscribe((res) => {
      this.company = res;
      // check on the company.links one by one and if the link does not start with http:// or https:// then add it
      for (let link in this.company.links) {
        
        if (!this.company.links[link]?.startsWith("http://") && !this.company.links[link]?.startsWith("https://")) {
          this.company.links[link] = "http://" + this.company.links[link];
        }
    }
    })
  }

  onEditCompany() {
    this.refEditCompany = this.dialogService.open(EditCompanyComponent, { header: 'Edit Company', data: { company: this.company }, maximizable: true, width: '65%', height: '90%' });
    this.refEditCompany.onClose.subscribe(() => {
      this.company = this.getCompany();
    })
  }
  toggleStatus(post_id) {
    this.postService.toggleStatus(post_id).subscribe(
      (res: any) => {
        this.getPosts();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Post status updated successfully' });
      },
      (err) => {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: err.error.message });

      }
    )
  }

  getPosts() {
    this.postService.findAllPostsOfCompany(this.company._id).subscribe(
      (res: any) => {
        this.posts = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  addPost() {
    this.refAdd = this.dialogService.open(PostDetailsComponent, { header: 'Add Post', data: { "mode": "ADD" }, maximizable: true, width: '90%', height: '90%' });
    this.refAdd.onClose.subscribe(() => {
      this.getPosts();
    })
  }
  seeDetails(post) {
    this.refDetails = this.dialogService.open(PostDetailsComponent, { header: 'Post Details', data: { post, "mode": "DETAILS" }, maximizable: true, width: '50%' });
  }

  seeEdit(post) {
    this.refEdit = this.dialogService.open(PostDetailsComponent, { header: 'Edit Post', data: { post, "mode": "EDIT" }, maximizable: true, width: '90%', height: '90%' });
    this.refEdit.onClose.subscribe(() => {
      this.getPosts();
    })
  }
  clear(table: Table) {
    table.clear();
  }
  onInputChange(event: any) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(inputValue, 'contains');
  }

}
