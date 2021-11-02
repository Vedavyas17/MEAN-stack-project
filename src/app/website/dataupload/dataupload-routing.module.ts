import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatauploadComponent} from '../dataupload/dataupload/dataupload.component'
const routes: Routes = [{
  path:'',
  component:DatauploadComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatauploadRoutingModule { }
