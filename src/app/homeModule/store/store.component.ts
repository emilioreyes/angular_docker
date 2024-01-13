import { Component, OnInit, inject } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit{
  myService=inject(ListService)
 productos:any[]=[]

  ngOnInit(): void {
    this.myService.getTestList().subscribe((res:any)=>{
      console.log(res)
      this.productos=res
    })
  }
}
