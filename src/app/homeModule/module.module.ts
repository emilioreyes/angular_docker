import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterModule } from './home-router.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponentComponent,StoreComponent,LoginComponent],
  imports: [
    CommonModule,HomeRouterModule,ReactiveFormsModule,FormsModule
  ]
})
export class ModuleModule { }
