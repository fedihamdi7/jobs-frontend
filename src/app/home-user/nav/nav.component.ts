import { AfterViewInit, Component,OnInit } from '@angular/core';
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
  isFromAfterAuth = false;
  isFromIsCompanyGuard = false;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private localStorageService : LocalStorageService

  ) {
    if (this.router.getCurrentNavigation()?.extras?.state) {
      if (this.router.getCurrentNavigation()?.extras?.state['redirectedAfterAuth']) {
        this.isFromAfterAuth = true;
      }else if (this.router.getCurrentNavigation()?.extras?.state['redirectedFromIsCompanyGuard']){
        this.isFromIsCompanyGuard = true;
      }
      if (history.state) {
        history.replaceState({}, '', this.router.url.split('?')[0]);
      }
    }
   }


  ngAfterViewInit(): void {

    if (this.isFromAfterAuth) {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successfully, Welcome back' });
    }
    if (this.isFromIsCompanyGuard) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You are not allowed to go there' });
      
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
            label: 'My Applications',
            icon: 'pi pi-file',
            routerLink: 'my-posts'
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
