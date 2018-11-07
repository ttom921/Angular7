import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opt1Component } from './opt1/opt1.component';
import { Opt2Component } from './opt2/opt2.component';
import { Opt3Component } from './opt3/opt3.component';

@NgModule({
  declarations: [Opt1Component, Opt2Component, Opt3Component],
  imports: [
    CommonModule
  ],
  exports: [
    Opt1Component
  ]
})
export class OperationModule { }
