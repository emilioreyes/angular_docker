import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'',children:[
    {
      path:"login", component:LoginComponent
    },{
      path:"store",component:StoreComponent
    },{
      path:"home",component:HomeComponentComponent
    },{
      path: '', pathMatch: 'full', redirectTo: 'login'
    }
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), CommonModule
  ]
})
export class HomeRouterModule { }
