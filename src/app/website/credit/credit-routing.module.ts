import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditingComponent } from './crediting/crediting.component';

const routes: Routes = [{
  path:'',
  component:CreditingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditRoutingModule { }
