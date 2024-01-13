import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';
import { filter, map, take } from 'rxjs/operators';

export const autoLoginGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const loginService = inject(LoginService);
  return loginService.isAuthenticated$.pipe( 
    filter(val => val !== null), 
    take(1),
    map(isAuthenticated=>{
      console.log(isAuthenticated);
     if (isAuthenticated){
      router.navigate(['/home'])
      }
      return true
    }))

};
export const authenticatedGuard : CanActivateFn = (route, segments) => {
  const loginService = inject(LoginService);
  const router=inject(Router)
  return loginService.isAuthenticated$.pipe( 
    filter(val => val !== null), 
    take(1),
    map(isAuthenticated=>{
      console.log(isAuthenticated);
     if (isAuthenticated){
       return true
      }else{
        router.navigate(['/login'])
        return false
      }
    }))
};
