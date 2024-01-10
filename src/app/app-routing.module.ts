import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromDockerComponent } from './dockerModule/from-docker/from-docker.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./homeModule/module.module').then(m => m.ModuleModule)
  },{
    path: 'docker',component:FromDockerComponent
  },{
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
