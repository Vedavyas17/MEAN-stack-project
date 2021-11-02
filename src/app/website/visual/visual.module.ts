import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualRoutingModule } from './visual-routing.module';
import { DataVisualComponent } from './data-visual/data-visual.component';


@NgModule({
  declarations: [DataVisualComponent],
  imports: [
    CommonModule,
    VisualRoutingModule
  ]
})
export class VisualModule { }
