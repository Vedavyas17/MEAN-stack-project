import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataVisualComponent } from './data-visual/data-visual.component';

const routes: Routes = [
  {
    path:'',
    component:DataVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualRoutingModule { }
