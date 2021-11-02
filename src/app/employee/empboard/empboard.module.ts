import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpboardRoutingModule } from './empboard-routing.module';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { Emp3Component } from './emp3/emp3.component';
import { Emp4Component } from './emp4/emp4.component';
import { Emp5Component } from './emp5/emp5.component';


@NgModule({
  declarations: [Emp1Component, Emp2Component, Emp3Component, Emp4Component, Emp5Component],
  imports: [
    CommonModule,
    EmpboardRoutingModule
  ]
})
export class EmpboardModule { }
