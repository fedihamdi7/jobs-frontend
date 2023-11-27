import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

export const isCompanyGuard: CanActivateFn = (route, state) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const user = localStorageService.getUser();


  if (user) {
    if (user.role === 'user') {
      router.navigate(['/home-user'], {
        state: { redirectedFromIsCompanyGuard: true }
      });
      return false;
    } else if (user.role === 'company') {
      return true;
    }
    return false;
  } else {
    return false;
  }

};
