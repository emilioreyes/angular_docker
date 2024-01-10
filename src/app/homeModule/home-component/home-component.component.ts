import { Component,OnInit } from '@angular/core';
import { UserResponse } from 'src/app/modelos/userModel';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
 // user: UserResponse[] = [];
 productos:any[]=[]
  constructor (private myService:ListService){}

  ngOnInit(): void {
    console.log('mi componete');
    this.myService.getTestList().subscribe((res:any)=>{
      console.log(res)
      this.productos=res
    })
  }
}
