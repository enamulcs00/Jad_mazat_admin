import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from '../cooldash/pages/directives/number-only/number-only.directive';

@NgModule({
  declarations: [NumberOnlyDirective],
  imports: [
    CommonModule
  ], exports: [
    NumberOnlyDirective
  ]
})
export class NumberModuleModule { }
