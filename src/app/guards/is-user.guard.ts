import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

export const isUserGuard: CanActivateFn = (route, state) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const user = localStorageService.getUser();


  if (user) {
    if (user.role === 'company') {
      router.navigate(['/home-company'], {
        state: { redirectedFromIsUserGuard: true }
      });
      return false;
    } else if (user.role === 'user') {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
