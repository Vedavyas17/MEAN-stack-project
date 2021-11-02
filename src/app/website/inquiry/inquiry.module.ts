import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InquiryRoutingModule } from './inquiry-routing.module';
import { EnquireComponent } from './enquire/enquire.component';


@NgModule({
  declarations: [EnquireComponent],
  imports: [
    CommonModule,
    InquiryRoutingModule
  ]
})
export class InquiryModule { }
