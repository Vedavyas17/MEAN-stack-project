import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliverComponent } from './deliver/deliver.component';

const routes: Routes = [{
  path:'',
  component:DeliverComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
