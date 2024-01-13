import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserResponse} from '../modelos/userModel';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  http=inject(HttpClient)

  getTestList(){
    let headers = new HttpHeaders(
      {'Authorization' : `Bearer ${localStorage.getItem('TOKEN')}`}
    )
    
   return this.http.get(`${environment.URL}/productos/`,{headers})
  }


}
