import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import { CreditingComponent } from './crediting/crediting.component';


@NgModule({
  declarations: [CreditingComponent],
  imports: [
    CommonModule,
    CreditRoutingModule
  ]
})
export class CreditModule { }
