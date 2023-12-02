import { AfterViewInit, Component,OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrl: './company-nav.component.css'
})
export class CompanyNavComponent implements OnInit,AfterViewInit{
  user : any;
  items : any[] = []
  isFromAfterAuth = false;
  isFromIsUserGuard = false;
  notifications : any[];
  notifCount = signal('0');
  constructor(
    private messageService : MessageService,
    private localStorageService : LocalStorageService,
    private router: Router,
    private companyService : CompanyService

  ){
    if (this.router.getCurrentNavigation()?.extras?.state) {
      if (this.router.getCurrentNavigation()?.extras?.state['redirectedAfterAuth']) {
        this.isFromAfterAuth = true;
      }else if (this.router.getCurrentNavigation()?.extras?.state['redirectedFromIsUserGuard']){
        this.isFromIsUserGuard = true;
      }
      if (history.state) {
        history.replaceState({}, '', this.router.url.split('?')[0]);
      }
    }
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getUser();    
    this.companyService.getNotificationsStream().subscribe((data) => {
      console.log(JSON.parse(data).notifications[0]);
      console.log(JSON.parse(data).notifications[0].length);
      
      // this.notifCount = signal(JSON.parse(data).notifications[0].length);
      this.notifCount.set(JSON.parse(data).notifications[0].length);
      this.notifications = JSON.parse(data).notifications[0];
    });
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
            label: 'Negotiations',
            icon: 'pi pi-eject',
            routerLink: 'negotiations'
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

  ngAfterViewInit(): void {
    if (this.isFromAfterAuth) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully, Welcome back' });
    }
    if (this.isFromIsUserGuard) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You are not allowed to go there' });
    }
  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  logout() {
    this.localStorageService.clear();
    this.router.navigate(['/']);
  }
}
