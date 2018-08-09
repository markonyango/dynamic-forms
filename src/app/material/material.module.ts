import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatOptionModule, MatCheckboxModule } from '@angular/material';

const MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: MODULES,
  declarations: []
})
export class MaterialModule { }
