import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { Emp3Component } from './emp3/emp3.component';
import { Emp4Component } from './emp4/emp4.component';
import { Emp5Component } from './emp5/emp5.component';

const routes: Routes = [
  {
    path:'',
    component:Emp1Component
  },
  {
    path:'empboard/emp2',
    component:Emp2Component
  },
  {
    path:'empboard/emp3',
    component:Emp3Component
  },
  {
    path:'empboard/emp4',
    component:Emp4Component
  },
  {
    path:'empboard/emp5',
    component:Emp5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpboardRoutingModule { }
