import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


const routes: Routes = [
  {
    path:'',
    component:BoardComponent,
    children:[
      {
        path:'comp1',
        component:Comp1Component,
      },
      {
        path:'comp2',
        component:Comp2Component,
      },{
        path:'comp3',
        component:Comp3Component,
      },
      {
        path:'comp4',
        component:Comp4Component
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
