import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

export const IsNotAuthGuard: CanActivateFn = (route, state) => {

  const localStorageService : LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const user = localStorageService.getUser();
  
  
  if (user) {
    if (user.role === 'user') {
      router.navigate(['/home-user']);
    }else if (user.role === 'company') {
      router.navigate(['/home-company']);
    }
    return false;
  }else{
    return true;
  }
};

