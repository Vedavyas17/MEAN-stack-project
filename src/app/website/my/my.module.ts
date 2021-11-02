import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRoutingModule } from './my-routing.module';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MyRoutingModule
  ]
})
export class MyModule { }
