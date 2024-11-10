import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('USER_TOKEN');
  if(token != null){
    return true
  }else{
    router.navigateByUrl("login");
    return false
  }
};
