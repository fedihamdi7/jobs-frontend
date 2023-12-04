import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { SelectItem } from 'primeng/api';
import { UserServiceService } from './user-service.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit {
  isFromAuthGuard = false;
  posts: any[] = [];
  connectedUser: any;
  sortOptions!: SelectItem[];
  text!: string;
  sortOrder!: number;

  sortField!: string;
  filterValue!: string;
  ref: DynamicDialogRef | undefined;
  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserServiceService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.localStorageService.getUser();
    this.sortOptions = [
      { label: 'Price High to Low', value: '!applicants' },
      { label: 'Price Low to High', value: 'applicants' }
    ];

    this.userService.getAllPosts().subscribe((data: any) => {
      this.posts = data;     
    })
  }

  show(post) {
    this.ref = this.dialogService.open(PostComponent, { header: 'Post Details',data : post,maximizable: true,height: '100%',width: '80%'});
}


  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  originalPosts: any[];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    // If the original products array is not yet initialized, store a copy
    if (!this.originalPosts) {
      this.originalPosts = [...this.posts];
    }

    // Filter posts by applicants
    this.posts = this.originalPosts.filter((post: any) => {
      
      return post.title.toString().toLowerCase().includes(filterValue.toLowerCase());
    });

    // If empty filter, return all original posts
    if (filterValue === '') {
      this.posts = [...this.originalPosts];
    }
  }
}
