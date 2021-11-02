import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }
