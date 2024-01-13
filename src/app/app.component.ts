import { Component, inject } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular_docker';
  loginService=inject(LoginService)

}
   

//"target":"http://192.168.100.30:4000",