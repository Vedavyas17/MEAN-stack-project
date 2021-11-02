import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitRoutingModule } from './debit-routing.module';
import { DebitingComponent } from './debiting/debiting.component';


@NgModule({
  declarations: [DebitingComponent],
  imports: [
    CommonModule,
    DebitRoutingModule
  ]
})
export class DebitModule { }
