import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorderRoutingModule } from './sorder-routing.module';
import { Order1Component } from './order1/order1.component';


@NgModule({
  declarations: [Order1Component],
  imports: [
    CommonModule,
    SorderRoutingModule
  ]
})
export class SorderModule { }
