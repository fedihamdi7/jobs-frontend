import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit,AfterViewInit{

  user : any;
  items: any[] = [];
  isFromAuthGuard = false;
  isFromAfterAuth = false;
  constructor(
    private messageService: MessageService,
    private router: Router,
    private localStorageService : LocalStorageService

  ) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      if (this.router.getCurrentNavigation()?.extras?.state['redirectedFromAuthGuard']) {
        this.isFromAuthGuard = true;
      }else if (this.router.getCurrentNavigation()?.extras?.state['redirectedAfterAuth']) {
        this.isFromAfterAuth = true;
        // remove the state from the url
      }
      if (history.state) {
        history.replaceState({}, '', this.router.url.split('?')[0]);
      }
    }
   }


  ngAfterViewInit(): void {
    if (this.isFromAuthGuard) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You are already logged in' });
    }
    if (this.isFromAfterAuth) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully, Welcome back' });
    }
  }
  ngOnInit(): void {
    this.user = this.localStorageService.getUser();    
        
    this.items = [
      {
        label : this.user.name || "Fedi Hamdi",
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
              this.update();
            }
          },
          {
            label: 'Applications',
            icon: 'pi pi-file',
            routerLink: '/fileupload'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout();
            }
          }
        ]
      },

    ];
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  logout() {
    this.localStorageService.clear();
    this.router.navigate(['/']);
  }
}
