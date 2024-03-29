import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterModule } from './home-router.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardProductoComponent } from '../Components/card-producto/card-producto.component';



@NgModule({
  declarations: [HomeComponentComponent,StoreComponent,LoginComponent],
  imports: [
    CommonModule,HomeRouterModule,ReactiveFormsModule,FormsModule,CardProductoComponent
  ]
})
export class ModuleModule { }
