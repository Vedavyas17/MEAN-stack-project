import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fi1Component } from './fi1/fi1.component';
import { Fi2Component } from './fi2/fi2.component';
import { Fi3Component } from './fi3/fi3.component';
import { Finance1Component } from './finance1/finance1.component';

const routes: Routes = [
  {
    path:'',
    component:Finance1Component
  },
  {
    path:'fiboard/fi1',
    component:Fi1Component
  },
  {
    path:'fiboard/fi2',
    component:Fi2Component
  },
  {
    path:'fiboard/fi3',
    component:Fi3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiboardRoutingModule { }
