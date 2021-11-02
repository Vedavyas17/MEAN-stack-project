import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiboardRoutingModule } from './fiboard-routing.module';
import { Finance1Component } from './finance1/finance1.component';
import { Fi2Component } from './fi2/fi2.component';
import { Fi1Component } from './fi1/fi1.component';
import { Fi3Component } from './fi3/fi3.component';


@NgModule({
  declarations: [Finance1Component, Fi2Component, Fi1Component, Fi3Component],
  imports: [
    CommonModule,
    FiboardRoutingModule
  ]
})
export class FiboardModule { }
