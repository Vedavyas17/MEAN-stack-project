import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigningComponent } from './signing/signing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigningComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SigninModule { }
