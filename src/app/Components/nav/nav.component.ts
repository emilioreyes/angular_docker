import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {
  isClosed:boolean=true
  loginService=inject(LoginService)
  router=inject(Router)

  onHandlerBurguerMenu(){
    this.isClosed=!this.isClosed
 }
 onLogout(){
  localStorage.removeItem("TOKEN")
  this.onHandlerBurguerMenu()
  this.loginService.isAuthenticated$.next(false)
  this.router.navigate(['/login'])
 }
}
