import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorboardRoutingModule } from './vendorboard-routing.module';
import { Vboard1Component } from './vboard1/vboard1.component';
import { EditvendorComponent } from './editvendor/editvendor.component';


@NgModule({
  declarations: [Vboard1Component, EditvendorComponent],
  imports: [
    CommonModule,
    VendorboardRoutingModule
  ]
})
export class VendorboardModule { }
