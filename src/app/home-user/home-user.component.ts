import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { SelectItem } from 'primeng/api';
import { UserServiceService } from './user-service.service';
import { parse } from 'angular-html-parser';

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
  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserServiceService
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

  originalProducts: any[];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    // If the original products array is not yet initialized, store a copy
    if (!this.originalProducts) {
      this.originalProducts = [...this.posts];
    }

    // Filter posts by applicants
    this.posts = this.originalProducts.filter((product: any) => {
      return product.applicants.toString().toLowerCase().includes(filterValue.toLowerCase());
    });

    // If empty filter, return all original posts
    if (filterValue === '') {
      this.posts = [...this.originalProducts];
    }
  }
}
