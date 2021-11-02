import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VdetailsComponent } from './vdetails/vdetails.component';

const routes: Routes = [
  {
    path:'',
    component:SignupComponent
  },
  {
    path:'vendor/vdetails',
    component:VdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
