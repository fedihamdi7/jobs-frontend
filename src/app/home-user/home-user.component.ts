import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit {
  //TODO : get the products from the backend
  isFromAuthGuard = false;
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      applicants: 1,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      applicants: 2,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      applicants: 3,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '2000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      applicants: 4,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];
  connectedUser: any;
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;
  filterValue!: string;
  constructor(
    private localStorageService: LocalStorageService
  ) { }



  ngOnInit(): void {
    this.connectedUser = this.localStorageService.getUser();
    this.sortOptions = [
      // TODO : to be changed to sort by date
      { label: 'Price High to Low', value: '!applicants' },
      { label: 'Price Low to High', value: 'applicants' }
    ];
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
      this.originalProducts = [...this.products];
    }

    // Filter products by applicants
    this.products = this.originalProducts.filter((product: any) => {
      return product.applicants.toString().toLowerCase().includes(filterValue.toLowerCase());
    });

    // If empty filter, return all original products
    if (filterValue === '') {
      this.products = [...this.originalProducts];
    }
  }
}
