import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IrpaRoutingModule } from './irpa-routing.module';
import { IrpaComponent } from './irpa/irpa.component';


@NgModule({
  declarations: [IrpaComponent],
  imports: [
    CommonModule,
    IrpaRoutingModule
  ]
})
export class IrpaModule { }
