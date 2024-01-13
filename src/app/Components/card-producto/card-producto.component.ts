import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent {
  @Input() producto!:any
}
