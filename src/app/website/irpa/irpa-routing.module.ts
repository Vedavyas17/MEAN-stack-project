import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IrpaComponent} from '../irpa/irpa/irpa.component'
const routes: Routes = [{
  path:'',
  component:IrpaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IrpaRoutingModule { }
