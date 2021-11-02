import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Order1Component } from './order1/order1.component';

const routes: Routes = [{
  path:'',
  component:Order1Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorderRoutingModule { }
