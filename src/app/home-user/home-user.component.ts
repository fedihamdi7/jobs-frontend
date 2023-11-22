import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements AfterViewInit {
  
  isFromAuthGuard = false;

  constructor(
    private messageService: MessageService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      if (this.router.getCurrentNavigation()?.extras?.state['redirectedFromAuthGuard']) {
        console.log(this.router.getCurrentNavigation()?.extras?.state['redirectedFromAuthGuard']);
        
        this.isFromAuthGuard = true;
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.isFromAuthGuard) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You are already logged in' });
    }
  }

}
