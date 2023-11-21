import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

export const IsNotAuthGuard: CanActivateFn = (route, state) => {

  const localStorageService : LocalStorageService = inject(LocalStorageService);
  const router = inject(Router);
  const token = localStorageService.getToken();
  
  if (token) {
    router.navigate(['/home'],
                    { 
                      state: {redirectedFromAuthGuard : true}
                    });
    return false;
  }else{
    return true;
  }
};

