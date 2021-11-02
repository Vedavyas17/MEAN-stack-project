import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditvendorComponent } from './editvendor/editvendor.component';
import { Vboard1Component } from './vboard1/vboard1.component';

const routes: Routes = [
  {
    path:'',
    component:Vboard1Component
},
{
  path:'vendorboard/editvendor',
  component:EditvendorComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorboardRoutingModule { }
