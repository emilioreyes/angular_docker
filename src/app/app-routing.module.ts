import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authenticatedGuard, autoLoginGuard } from './Guards/authenticated.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },{
    path:"login", component:LoginComponent,
    canActivate:[autoLoginGuard]
  },{
    path: 'home',
    loadChildren: () => import('./homeModule/module.module').then(m => m.ModuleModule),
    canActivate:[authenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
