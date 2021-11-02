import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebitingComponent } from './debiting/debiting.component';

const routes: Routes = [{
  path:'',
  component:DebitingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitRoutingModule { }
