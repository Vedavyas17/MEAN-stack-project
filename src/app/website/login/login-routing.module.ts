import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogingComponent } from './loging/loging.component';

const routes: Routes = [
  {
    path:'',
    component:LogingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
