import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayageRoutingModule } from './payage-routing.module';
import { PayingComponent } from './paying/paying.component';


@NgModule({
  declarations: [PayingComponent],
  imports: [
    CommonModule,
    PayageRoutingModule
  ]
})
export class PayageModule { }
