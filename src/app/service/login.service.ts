import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Credentials } from '../modelos/userModel';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
 


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false)
  http=inject(HttpClient)
  constructor() { 
    this.loadToken()
  }

  login(credntilas: Credentials){
    return this.http.post(`${environment.URL}/login`,credntilas).pipe(map((res:any)=>{
      
      if (res.token){
        localStorage.setItem("TOKEN",res.token)
        this.isAuthenticated$.next(true) 
      } else{
       this.isAuthenticated$.next(false)
      }
      return res
    }))
  }
  loadToken() {
    localStorage.getItem("TOKEN") ? this.isAuthenticated$.next(true):this.isAuthenticated$.next(false)
  }
}
