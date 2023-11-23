import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../shared/local-storage.service';

// export const isAuthGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  
  constructor(
    private localStorageService : LocalStorageService,
    private router : Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user = this.localStorageService.getUser();
    if (user) {
      return true;
    }else{
      this.router.navigate(['/auth'],{
        state: {NotLoggedIn : true}
      });
      return false;
    }
  }

}
