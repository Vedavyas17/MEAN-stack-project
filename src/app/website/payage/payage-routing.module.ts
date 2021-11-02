import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayingComponent } from './paying/paying.component';

const routes: Routes = [{
  path:'',
  component:PayingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayageRoutingModule { }
