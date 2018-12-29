import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalaryPipe } from '../custom/salary.pipe';
import { HoverDirective } from '../custom/directive/hover.directive';
import { ListModule } from 'list';

@NgModule({
  declarations: [ SalaryPipe, HoverDirective ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ListModule
  ],
  exports : [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SalaryPipe,
    HoverDirective,
    ListModule
  ]
})
export class SharedModule { }
