import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MmboardRoutingModule } from './mmboard-routing.module';
import { ComponentComponent } from './component/component.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';


@NgModule({
  declarations: [ComponentComponent, Com1Component, Com2Component, Com3Component, Com4Component],
  imports: [
    CommonModule,
    MmboardRoutingModule
  ]
})
export class MmboardModule { }
