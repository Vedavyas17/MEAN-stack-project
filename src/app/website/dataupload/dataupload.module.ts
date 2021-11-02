import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatauploadRoutingModule } from './dataupload-routing.module';
import { DatauploadComponent } from './dataupload/dataupload.component';


@NgModule({
  declarations: [DatauploadComponent],
  imports: [
    CommonModule,
    DatauploadRoutingModule
  ]
})
export class DatauploadModule { }
