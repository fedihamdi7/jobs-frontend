import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrl: './home-company.component.css'
})
export class HomeCompanyComponent implements AfterViewInit, OnInit {
  
  isFromAuthGuard = false;
  company : any;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private localStorage: LocalStorageService
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
  }

}
