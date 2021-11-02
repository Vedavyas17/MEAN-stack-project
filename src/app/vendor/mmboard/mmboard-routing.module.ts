import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
 {
   path:'',
   component:ComponentComponent,
   //children:[
    //  {
    //    path:'com1',
    //    component:Com1Component
    //  },
  //    {
  //      path:'com2',
  //      component:Com2Component
  //    },
  //    {
  //      path:'com3',
  //      component:Com3Component
  //    },
  //  ]
 },
 {
   path:'mmboard/com1',
   component:Com1Component
 },
 {
  path:'mmboard/com2',
  component:Com2Component
},
{
  path:'mmboard/com3',
  component:Com3Component
},
{
  path:'mmboard/com4',
  component:Com4Component
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MmboardRoutingModule { }
